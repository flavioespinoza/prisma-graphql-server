const Chance = require('chance')
const chance = Chance()

const person = {
	"id": chance.id(),
	"identifiers": {
		"SSNs": [],
		"emails": [
			{
				"value": chance.email()
			}
		],
		"phoneNumbers": [
			{
				"use": [
					"HOME"
				],
				"value": chance.phone()
			},
			{
				"use": [
					null
				],
				"value": chance.phone()
			}
		]
	},
	"names": [
		{
			"use": [
				"PRIMARY"
			],
			"fullName": `${chance.first()} ${chance.last()}`
		}
	],
	"postalAddresses": [
		{
			"use": [
				"HOME"
			],
			"addressFull": `${chance.addressFull()}`
		}
	],
	"birthDate": `${chance.date()}`,
	"gender": null
}

module.export = person