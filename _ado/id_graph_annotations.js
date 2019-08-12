const _u = require('../../../../server/_helpers/_utils')
const _log = _u._log

const json = {
	id: 'did:.....#guid',
	type: ['AgeOverCredential'],
	issuer: 'issuer1',
	credentialSubject: [{
		subject: {
			id: 'unique within scope of the request',
			type: 'Person',
			identifiers: {}
		},
		AgeOver: '13'
	}],
	basisOfVerification: {
		type: 'BasisOfVerification',
		annotations: [{
			id: 'optional_id',
			type: ['ProofingAnnotation'],
			annotator: 'issuer saying what proofing they did',
			proofingType: ['DocumentVerification'],
			evidenceDocument: 'DriversLicense',
			subjectPresence: 'Physical',
			documentPresence: 'Physical'
		}, {
			id: 'optional_id',
			type: ['RelationshipAnnotation'],
			annotator: 'issuer and party stating their relationship with subject',
			knows_type: ['Personal'],
			duration: '1Y',
			interaction: 'Daily'
		}, {
			id: 'optional_id',
			type: ['AssociationAnnotation'],
			annotator: 'issuer and subject of this claim',
			association_type: ['Student'],
			evidence: 'EmailAuthentication',
			organization: {
				type: 'Organization',
				'ado org props': 'values'
			}
		}]
	}
}


_log.deep(json)