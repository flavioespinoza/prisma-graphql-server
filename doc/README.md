# Authnet Data Ontology

## Data Model
GraphQL `data-models` are organized in terms of `types` and `fields`, not endpoints. 

The `type` based `data-model` auto-generates `schema` and `docs` with all possible CRUD operations.  

_And, if that wern't cool enouth!_ :)

`prisma` uses the `schema` to auto-generate all `query` & `mutation` typescript methods.


type User @db(name: "person") {
  id: ID! @id
  createdAt: DateTime! @createdAt
  updatedAt: DateTime! @updatedAt
  email: String! @unique
  phone_number: [PhoneNumber!]!
  role: AuthLevel @default(value: USER)
  gender: Gender!
  identifiers: Identifiers!
}


For each model type in your datamodel, six methods for writing data are generated. For example, for the User model the following operations are available:

createUser: Creates a new User record in the database.
updateUser: Updates an existing User record in the database.
deleteUser: Deletes an existing User record from the database.
upsertUser: Updates an existing or create a new User record in the database.
updateManyUsers: Updates many existing User records in the database at once.
deleteManyUsers: Deletes many existing User records from the database at once.


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
