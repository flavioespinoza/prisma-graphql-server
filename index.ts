import { prisma } from './generated/prisma-client'
import datamodelInfo from './generated/nexus-prisma'
import * as path from 'path'
import { stringArg, idArg } from 'nexus'
import { prismaObjectType, makePrismaSchema } from 'nexus-prisma'
import { GraphQLServer } from 'graphql-yoga'
import _d from 'datedash'
import _ from 'lodash'

const { prismaExtendType } = require("nexus-prisma")
const { queryField } = require("nexus")

const Chance = require('chance')
const chance = new Chance()

const _createUser = async () => {
	try {
		const address = () => {
			let _address = chance.address()
			let _city = chance.city()
			let _state = chance.state()
			let _zipcode = chance.postcode()
			return `${_address} ${_city} ${_state} ${_zipcode}`
		}

		let _birthday = chance.birthday({ string: true })
		let _birthDate = _d.date(_birthday, '-')

		const new_user = await prisma.createUser({
			email: chance.email(),
			phoneNumber: chance.phone(),
			name: chance.first(),
			address: address(),
			birthDate: _birthDate
		})

		console.log(new_user)

		return new_user

	} catch (err) {
		console.error('User', err)
	}
}

// A `main` function so that we can use async/await
async function main() {

	const newUser = await _createUser()

	console.log(`Created new user:`, JSON.stringify(newUser, null, 2))

	// Read all users from the database and print them to the console
	// const allUsers = await prisma.users()

}

let user_count = 12

for (let i = 0; i < user_count; i++) {
	main().catch(e => console.error(e))
	if (i === 11) {
		console.log(user_count + ' new Users loaded to MongoDB')
	}
}



const Query = prismaObjectType({
	name: "Query",
	definition(t) {
		t.prismaFields([])
	}
})

const Mutation = prismaObjectType({
	name: 'Mutation',
	definition(t) {
		t.prismaFields(['createUser'])
	}
})

const schema = makePrismaSchema({
	types: [Query, Mutation],

	prisma: {
		datamodelInfo,
		client: prisma,
	},

	outputs: {
		schema: path.join(__dirname, './generated/schema.graphql'),
		typegen: path.join(__dirname, './generated/nexus.ts'),
	},
})

const PrismaServer = new GraphQLServer({
	schema,
	context: { prisma },
})

PrismaServer.start(() => console.log('PrismaServer is running on http://localhost:4000'))