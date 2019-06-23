const _ = require('lodash')

const user_json = {
	dn: 'uid=user.13,ou=People,dc=example,dc=com',
	attributes:
		[
		{
			name: 'mail',
			values: ['user.13@example.com']
		},
		{
			name: 'homePhone',
			values: ['+1 876 813 3821']
		},
		{
			name: 'givenName',
			values: ['Oona']
		},
		{
			name: 'mobile',
			values: ['+1 063 373 1605']
		},
		{
			name: 'sn',
			values: ['Waugh']
		},
		{
			name: 'cn',
			values: ['Oona Waugh']
		},
		{
			name: 'street',
			values: ['54379 Walnut Street']
		},
		{
			name: 'st',
			values: ['NJ']
		},
		{
			name: 'postalAddress',
			values: ['Oona Waugh$54379 Walnut Street$Anchorage, NJ  80761']
		},
		{
			name: 'l',
			values: ['Anchorage']
		},
		{
			name: 'postalCode',
			values: ['80761']
		}
	]
}


const _get_vals = _.map(user_json.attributes, (obj, i) => {
    return obj.name
})

console.log(_get_vals)



module.exports = user_json