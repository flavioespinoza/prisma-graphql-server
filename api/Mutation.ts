import uuid from 'uuid/v4'
import gql from 'graphql-tag'

interface EmailObj {
	value: string
}

interface MobilePhoneObj {
	value: string
}

interface UserDataParams {
	firstName: string | any
	middleName: string | any
	lastName: string | any
	email: string | any
	mobilePhone: string | any
}

const createUser = (data: UserDataParams) => {

	const name = `${data.firstName} ${data.middleName} ${data.lastName}`
	
	const new_user = {
		createdAt: new Date().toDateString(),
		updatedAt: new Date().toDateString(),
		name: name,
		firstName: data.firstName,
		middleName: data.middleName,
		lastName: data.lastName,
	}

	const email: EmailObj = {
		value: data.email
	}

	const mobilePhone: MobilePhoneObj = {
		value: data.mobilePhone
	}

	return  `
		mutation {
			createUser(
				data: {
					name: "${new_user.name}"
					firstName: "${new_user.firstName}"
					middleName: "${new_user.middleName}"
					lastName: "${new_user.lastName}"
					emails: {
						create: [${email}]
					}
					mobilePhones: { create: [${mobilePhone}] }
				}
			) {
				id
				firstName
				lastName
				middleName
				emails {
					value
				}
				mobilePhones {
					value
				}
			}
		}
	`
}

export { createUser }