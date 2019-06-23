# Authnet Data Ontology

## Data Model
GraphQL `data-models` are organized in terms of `types` and `fields`, not endpoints. 

The `type` based `data-model` auto-generates `schema` and `docs` with all possible CRUD operations.  

_And, if that wern't cool enouth!_ :)

`prisma` uses the `schema` to auto-generate all `query` & `mutation` typescript methods.

## Server
[prisma-graphql-server](https://github.com/flavioespinoza/prisma-graphql-server)
Postgres, MySQL & MongoDB deployed in minutes with docker-compose

data-access-layer 
prisma-graphql deployed on node-koa server






`react-appolo-client`.


`react-next-client`'






### Required Relations

For a `type` with a required _to-one_ relation field can only be created using a `declarative` with the `!` operator to ensure the field will never be `null`.

_Consider the following relation_:
```ts
type Person {
  id: ID! @id
  birth_date: BirthDate!
}

type BirthDate {
  id: ID! @id
  owner: User!
  date: Date!
}
```

`BirthDate` can never be created without a `Person` because of the inherent required constraint. 

Therefore, you need to bind `BirthDate` to `Person` using a `declarative-nested-write` with the `!` operator.

### Optional Relations
For _to-one_ relation fields that do not have a required constraint you can configure whether it is _required_ or _optional_.



```ts
type Person {
	id: ID! @id
	birth_date: BirthDate! 
	work_phone: WorkPhone
}

type WorkPhone {
	id: ID! @id
	owner: User
	value: Int!
}
```


A field for the type `WorkPhone` could be of type `WorkPhone` or `WorkPhone!` because a `Person` may or may not have a `WorkPhone`.
