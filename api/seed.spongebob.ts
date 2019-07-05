import { prisma as client } from '../generated/prisma-client/index';

// async loop helper method
async function _each(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		await callback(arr[i], i, arr)
	}
}

async function addUsers(users_arr) {
	
	const newUsers = []

	await _each(users_arr, async (user_obj) => {
		const user = await client.createUser(user_obj)
		newUsers.push(user)
	})

	console.log('new users added to db: ', newUsers)
	
}

// define new users to add to db
const newUsers = [
	{
		name: 'SpongeBob SquarePants',
		email: 'spongebob@bikinibottom.com'
	},
	{
		name: 'Patrick Star',
		email: 'patrick@bikinibottom.com'
	}
]

addUsers(newUsers).catch(e => console.error(e))

