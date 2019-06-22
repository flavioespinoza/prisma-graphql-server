"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_client_1 = require("./generated/prisma-client");
const nexus_prisma_1 = __importDefault(require("./generated/nexus-prisma"));
const path = __importStar(require("path"));
const nexus_1 = require("nexus");
const nexus_prisma_2 = require("nexus-prisma");
const graphql_yoga_1 = require("graphql-yoga");
const Chance = require('chance');
const chance = new Chance();
// A `main` function so that we can use async/await
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create a new user with a new post
        const newUser = yield prisma_client_1.prisma.createUser({
            name: chance.first(),
            email: chance.email(),
            posts: {
                create: [
                    {
                        title: 'Join us for GraphQL Conf in 2019',
                    },
                    {
                        title: 'Subscribe to GraphQL Weekly for GraphQL news',
                    },
                ],
            },
        });
        console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);
        // Read all users from the database and print them to the console
        const allUsers = yield prisma_client_1.prisma.users();
        console.log(allUsers);
        const allPosts = yield prisma_client_1.prisma.posts();
        console.log(allPosts);
    });
}
main().catch(e => console.error(e));
const Query = nexus_prisma_2.prismaObjectType({
    name: 'Query',
    definition(t) {
        t.prismaFields(['post']);
        t.list.field('feed', {
            type: 'Post',
            resolve: (_, args, ctx) => ctx.prisma.posts({ where: { published: true } }),
        });
        t.list.field('postsByUser', {
            type: 'Post',
            args: { email: nexus_1.stringArg() },
            resolve: (_, { email }, ctx) => ctx.prisma.posts({ where: { author: { email } } }),
        });
    },
});
const Mutation = nexus_prisma_2.prismaObjectType({
    name: 'Mutation',
    definition(t) {
        t.prismaFields(['createUser', 'deletePost']);
        t.field('createDraft', {
            type: 'Post',
            args: {
                title: nexus_1.stringArg(),
                authorId: nexus_1.idArg({ nullable: true }),
            },
            resolve: (_, { title, authorId }, ctx) => ctx.prisma.createPost({
                title,
                author: { connect: { id: authorId } },
            }),
        });
        t.field('publish', {
            type: 'Post',
            nullable: true,
            args: { id: nexus_1.idArg() },
            resolve: (_, { id }, ctx) => ctx.prisma.updatePost({
                where: { id },
                data: { published: true },
            }),
        });
    },
});
const schema = nexus_prisma_2.makePrismaSchema({
    types: [Query, Mutation],
    prisma: {
        datamodelInfo: nexus_prisma_1.default,
        client: prisma_client_1.prisma,
    },
    outputs: {
        schema: path.join(__dirname, './generated/schema.graphql'),
        typegen: path.join(__dirname, './generated/nexus.ts'),
    },
});
const PrismaServer = new graphql_yoga_1.GraphQLServer({
    schema,
    context: { prisma: prisma_client_1.prisma },
});
PrismaServer.start(() => console.log('PrismaServer is running on http://localhost:4000'));
//# sourceMappingURL=index.js.map