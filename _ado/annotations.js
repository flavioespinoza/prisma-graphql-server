const _ = require('lodash')
const uuid = require('uuid/v4')
const _u = require('../_helpers/_utils')
const _log = _u._log


const AgeOver13 = {
	id: uuid(),
	type: 'AgeOver13',
	providedBy: 'user',
	value: true
}

const AgeOver18 = {
	id: uuid(),
	type: 'AgeOver18',
	providedBy: 'user',
	value: true
}

const Issuer = {
	id: 'unique within scope of the request',
	type: 'Issuer',
	info: {
		id: 'did:set_by_ingest_service',
		type: 'Person',
		identifiers: {
			names: ['Jonathan Hare'],
			emails: ['jonathan@webshield.io']
		}
	},
}

const Subject = {
	id: 'unique within scope of the request',
	type: 'User',
	info: {
		id: 'did:set_by_ingest_service',
		type: 'Person',
		identifiers: {
			names: ['Flavio Espinoza'],
			emails: ['flavio@webshield.io']
		}
	}
}

const AgeOverCredential = {
	id: 'did:.....#guid',
	type: 'AgeOverCredential',
	issuer: Issuer,
	subject: Subject,
	claims: [AgeOver13],
	basisOfVerification: {
		id: uuid(),
		type: 'BasisOfVerification',
		annotations: {
			id: uuid(),
			type: 'AnnotatedClaim',
			items: [
				{
					id: uuid(),
					type: 'IdentityProofing',
					items: [
						{
							id: uuid(),
							type: 'IntroEmail',
							issuer: Issuer,
							annotation: 'I was introduced to User via email by a trusted associate who knows them.'
						},
						{
							id: uuid(),
							type: 'GovIssuedId',
							issuer: Issuer,
							annotation: 'I verified User identity based on User provided Driver’s License or Passport or other Government issued picture ID.'
						} 
					]
				},
				{
					id: uuid(),
					type: 'RelationshipToSubject',
					items: [
						{
							id: uuid(),
							type: 'WorkPlace',
							issuer: Issuer,
							annotation: 'Issuer works in different_office than User'
						},
						{
							id: uuid(),
							type: 'WorkAssociation',
							issuer: Issuer,
							annotation: 'Issuer is superior of User'
						},
						{
							id: uuid(),
							type: 'Duration',
							issuer: Issuer,
							annotation: 'Issuer has known User for 4 months'
						},
						{
							id: uuid(),
							type: 'Interaction',
							issuer: Issuer,
							annotation: 'Issuer interacts with User on a weekly basis'
						}
					]
				},
				{
					id: uuid(),
					type: 'RelationshipToOrg',
					items: [
						{
							id: uuid(),
							type: 'UserCorporate',
							issuer: Issuer,
							annotation: 'User is an employee of the corporate_org'
						},
						{
							id: uuid(),
							type: 'IssuerCorporate',
							issuer: Issuer,
							annotation: 'Issuer is an executive of the corporate_org'
						}
					]
				}
			]
		}
	}
}

