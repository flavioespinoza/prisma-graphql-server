# Local Dev: Working
get-graphql-schema http://localhost:4466/ > ./_schema/_user.schema.graphql

# Jun 22, 2019: Working
get-graphql-schema 'https://ds-webshield.resilient-networks.com/v1/graphql' > './_schema/_person.schema.graphql'

# Jun 22, 2019: BROKEN
get-graphql-schema 'https://as-ingest-webshield.resilient-networks.com:/publish/v1/person' > './_schema/_person_ingest.schema.graphql'
