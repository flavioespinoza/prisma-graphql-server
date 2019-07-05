import { 
	prisma
} from '../generated/prisma-client/index';
const Chance = require('chance')
const chance = new Chance()

async function _each(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		await callback(arr[i], i, arr)
	}
}


(async function () {
	try {

		const number_of_users = new Array(20)

		await _each(number_of_users, async function () {
			
			const firstName = chance.first()
			const middleName = 'B'
			const lastName = chance.first()
			const name = `${firstName} ${middleName} ${lastName}`
			const personal_email = `${firstName}.${lastName}@example.com`
			const work_email = `${firstName}.${lastName}@work.example.com`
			const mobile_phone: string = chance.phone()
	
			const new_user_obj = {
				firstName: firstName,
				middleName: middleName,
				emails: {
					create: [
						{ 
							value: personal_email 
						},
						{ 
							value: work_email 
						}
					]
				},
				phoneNumbers: [
					{
						"type": "MOBILE",
						"value": "444-444-4444",
						"use": [
							"PERSONAL",
							"WORK"
						]
					}
				],
				lastName: lastName,
				name: name,
			}


			const x = {
				name: "Steven Flavio Espinoza",
				firstName: "Steven",
				lastName: "Espinoza",
				middleName: "Flavio",
				emails: {
					create: [
						{ value: "flavio.espinoza@gmail.com" },
						{ value: "flavio@webshield.io" }
					]
				},
				phoneNumbers: {
					create:{
						type: "Mobile",
						value: "233-333-3333"
					}
				}
			}

			// const new_user = await prisma.createUser(x)

			// console.log(new_user)

		})

	} catch (err) {
		console.log(new Error(err))
	}
})()
