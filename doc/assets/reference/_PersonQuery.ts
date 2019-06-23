const _PersonQueryResponse = {
	'data': {
		'person': {
			'id': '1001',
			'identifiers': {
				'SSNs': [
					{
						'value': '311-11-1111'
					}
				],
				'emails': [
					{
						'value': 'BOB@JONESFAMILY.COM'
					}
				],
				'phoneNumbers': [
					{
						'use': [
							'CELL'
						],
						'value': '702-222-2222'
					},
					{
						'use': [
							'WORK'
						],
						'value': '800-201-2001'
					}
				]
			},
			'names': [
				{
					'use': [
						'PRIMARY'
					],
					'fullName': 'ROBERT M JONES'
				}
			],
			'postalAddresses': [
				{
					'use': [
						'HOME'
					],
					'addressFull': '111 FIRST ST LAS VEGAS NV 89111'
				},
				{
					'use': [
						'MAIL'
					],
					'addressFull': 'PO BOX 111 LAS VEGAS NV 89111'
				}
			],
			'birthDate': '1981-01-02',
			'gender': 'M'
		}
	}
}
