# Prisma GraphQL Client

## Data Model
GraphQL `data-models` are organized in terms of `types` and `fields`, not endpoints. 

The `type` based `data-model` auto-generates `schema` and `docs` with all possible CRUD operations.  

_And, if that wern't cool enouth!_ :)

`prisma` along with `nexus` auto-generates a typescript `client` with all `query` & `mutation` methods.

## Example
**process**: 
- build datamodel
- auto-generate graphql schema 
- auto-generate typescript client
- auto-generate typescript client query and mutation methods
- add users (mutation)
- find user (query)
- update user (mutation)
- delete user (mutation)

#### build data model

create a `datamodel.prisma` file in your projects root directory:

```graphql
# This is AuthNet Discovory Service data model

type User @db(name: "user") {
  id: ID! @id
  createdAt: DateTime! @createdAt
  name: String!
  email: String! @unique
  role: Role @default(value: USER)
  posts: [Post!]!
}

type Post @db(name: "post") {
  id: ID! @id
  createdAt: DateTime! @createdAt
  updatedAt: DateTime! @updatedAt
  author: User!
  published: Boolean! @default(value: false)
  categories: [Category!]! @relation(link: TABLE, name: "PostToCategory")
}

type Category @db(name: "category") {
  id: ID! @id
  name: String!
  posts: [Post!]! @relation(name: "PostToCategory")
}

type PostToCategory @db(name: "post_to_category") @relationTable {
  post: Post
  category: Category
}

enum Role {
  USER
  ADMIN
}
```

#### auto-generate graphql schema
```bash
prisma deploy
```

#### auto-generate ts client
```bash
prisma generate
```

#### auto-generate ts client query and mutation methods
```bash
npx nexus-prisma-generate --client ./generated/prisma-client --output ./generated/nexus-prisma
```

**client methods created**

- `createUser`: Creates a new User record in the database.
- `updateUser`: Updates an existing User record in the database.
- `deleteUser`: Deletes an existing User record from the database.
- `upsertUser`: Updates an existing or create a new User record in the database.
- `updateManyUsers`: Updates many existing User records in the database at once.
- `deleteManyUsers`: Deletes many existing User records from the database at once.

#### add users (mutation)

create seed.ts file
```ts
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
```

<br/>

run with ts-node
```bash
ts-node seed.ts
```

<br/>

console.log output
```bash
new users added to db: [
	{
		name: 'SpongeBob SquarePants',
		email: 'spongebob@bikinibottom.com',
		role: 'USER',
		id: 'cjxqed01m001h0780iq45lgtk',
		createdAt: '2019-07-05T17:52:56.652Z'
	}, 
	{
		name: 'Patrick Star',
		email: 'patrick@bikinibottom.com',
		role: 'USER',
		id: 'cjxqed050001m07803z2m5bwd',
		createdAt: '2019-07-05T17:52:56.819Z'
	}
]
```

---

### Prisma Data Model

<details>

<summary>Expand for details about the Prisma data model</summary>

### Required Relations

For a `type` with a required _to-one_ relation field can only be created using a `declarative` with the `!` operator to ensure the field will never be `null`.

_Consider the following relation_:
```ts
type User {
  id: ID! @id
  birth_date: BirthDate!
}

type BirthDate {
  id: ID! @id
  user: User!
  date: Date!
}
```

`BirthDate` can never be created without a `User` because of the inherent required constraint. 

Therefore, you need to bind `BirthDate` to `User` using a `declarative-nested-write` with the `!` operator.

### Optional Relations
For _to-one_ relation fields that do not have a required constraint you can configure whether it is _required_ or _optional_.

```ts
type User {
	id: ID! @id
	birthDate: BirthDate! 
	mobilePhone: MobilePhone
}

type BirthDate {
  id: ID! @id
  user: User!
  date: Date!
}

type MobilePhone {
	id: ID! @id
	owner: User
	value: Int!
}
```

A field for type `MobilePhone` could be of type `MobilePhone` or `MobilePhone!`, because, as rare as it may be, a `User` may not own a `MobilePhone`.


### Prisma @relations modules
This is the AuthNet Discovory Service graphql schema used data model
```graphql

type User @db(name: "user") {
  id: ID! @id
  createdAt: DateTime! @createdAt
  name: String!
  email: String! @unique
  role: Role @default(value: USER)
  posts: [Post!]!
}

type Post @db(name: "post") {
  id: ID! @id
  createdAt: DateTime! @createdAt
  updatedAt: DateTime! @updatedAt
  author: User!
  published: Boolean! @default(value: false)
  categories: [Category!]! @relation(link: TABLE, name: "PostToCategory")
}

type Category @db(name: "category") {
  id: ID! @id
  name: String!
  posts: [Post!]! @relation(name: "PostToCategory")
}

type PostToCategory @db(name: "post_to_category") @relationTable {
  post: Post
  category: Category
}

enum Role {
  USER
  ADMIN
}
```


</details>


