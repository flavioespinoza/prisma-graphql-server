# prisma-graphql-server

GraphQL layer tools incl. ORM, Migrations and Admin UI (Postgres, MySQL & MongoDB)

## Getting Started
yarn add @flavioespinoza/log_log


### Local Dev Environment

Clone the repo
```bash
git clone https://github.com/flavioespinoza/prisma-graphql.git
```

Use `yarn` to install dependencies,
```bash
yarn install
```

Launch Prisma and the connected database with `docker-compose`:
```bash
docker-compose up -d
```

Generate GraphQL type definitions
```bash
prisma generate
```

Deploy Prisma GraphQL Api
```bash
prisma deploy
```

Start local dev server
```bash
yarn dev
```

### Local Dev Client

- playground: http://localhost:4466/

- db_admin: http://localhost:4466/_admin

## Prisma

Simplified and TypeScript GraphQL client & server layer.
- [explore features](https://www.prisma.io/docs/get-started/04-explore-features-f001/)
- [overview video](https://www.youtube.com/watch?v=nKmjKKyK5vc)
- [github](https://github.com/prisma/prisma)

### prisma-client

The Prisma client is an TypeScript auto-generated library that provides type-safe access to your database. It is used as a replacement for traditional ORMs in your API servers or microservice architecure.
- [docs](https://www.prisma.io/client/client-typescript/)
- [getting started](https://www.prisma.io/docs/1.34/get-started/01-setting-up-prisma-new-database-TYPESCRIPT-t002/)

### nexus-prisma

GraphQL ORM + CRUD schema generator for GraphQL enpoints
- [getting started](https://nexus.js.org/docs/database-access-with-prisma#getting-started)
- [overview video](https://www.youtube.com/watch?v=1qB8vQwWwIc)
- [github](https://github.com/prisma/nexus-prisma)

Generate CRUD building blocks
```bash
npx nexus-prisma-generate --client ./generated/prisma-client --output ./generated/nexus-prisma
```

### prisma-examples

[all prisma examples](https://github.com/prisma/prisma-examples)

Below are select few ready-to-run examples demonstrating various use cases

#### Docker TypeScript

| Demo | Description |
|:------|:----------|
| [`docker-mongodb`](https://github.com/prisma/prisma-examples/tree/master/typescript/docker-mongodb) | Set up Prisma locally with MongoDB |
| [`docker-mysql`](https://github.com/prisma/prisma-examples/tree/master/typescript/docker-mysql) | Set up Prisma locally with MySQL |
| [`docker-postgres`](https://github.com/prisma/prisma-examples/tree/master/typescript/docker-postgres) | Set up Prisma locally with PostgreSQL |

#### Golang

| Demo | Description |
|:------|:----------|
| [`cli-app`](https://github.com/prisma/prisma-examples/tree/master/go/cli-app) | Simple CLI TODO list app |
| [`graphql`](https://github.com/prisma/prisma-examples/tree/master/go/graphql) | Simple GraphQL server |
| [`http-mux`](https://github.com/prisma/prisma-examples/tree/master/go/http-mux) | Simple REST API with [gorilla/mux](https://github.com/gorilla/mux) |
| [`rest-gin`](https://github.com/prisma/prisma-examples/tree/master/go/rest-gin) | Simple REST API with [Gin](https://github.com/gin-gonic/gin) |
| [`script`](https://github.com/prisma/prisma-examples/tree/master/go/script) | Simple usage of Prisma client in script |

#### Docker Node.js

| Demo | Description |
|:------|:----------|
| [`docker-mongodb`](https://github.com/prisma/prisma-examples/tree/master/node/docker-mongodb) | Set up Prisma locally with MongoDB |
| [`docker-mysql`](https://github.com/prisma/prisma-examples/tree/master/node/docker-mysql) | Set up Prisma locally with MySQL |
| [`docker-postgres`](https://github.com/prisma/prisma-examples/tree/master/node/docker-postgres) | Set up Prisma locally with PostgreSQL |

