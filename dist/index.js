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
const nexus_prisma_2 = require("nexus-prisma");
const graphql_yoga_1 = require("graphql-yoga");
const datedash_1 = __importDefault(require("datedash"));
const lodash_1 = __importDefault(require("lodash"));
const { prismaExtendType } = require("nexus-prisma");
const { queryField } = require("nexus");
const log = require('ololog');
const Chance = require('chance');
const chance = new Chance();
const _createUser = () => __awaiter(this, void 0, void 0, function* () {
    try {
        const address = () => {
            let _address = chance.address();
            let _city = chance.city();
            let _state = chance.state();
            let _zipcode = chance.postcode();
            return `${_address} ${_city} ${_state} ${_zipcode}`;
        };
        let _birthday = chance.birthday({ string: true });
        let _birthDate = lodash_1.default.reverse(datedash_1.default.date(_birthday, '-'));
        return yield prisma_client_1.prisma.createUser({
            email: chance.email(),
            phoneNumber: chance.phoneNumber(),
            name: chance.first(),
            address: address(),
            birthDate: _birthDate
        });
    }
    catch (err) {
        log.ligthYellow('User', err);
    }
});
// A `main` function so that we can use async/await
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = yield _createUser();
        log.lightBlue(`Created new user:`, JSON.stringify(newUser, null, 2));
        // Read all users from the database and print them to the console
        // const allUsers = await prisma.users()
    });
}
let user_count = 12;
for (let i = 0; i < user_count; i++) {
    main().catch(e => console.error(e));
    if (i === 11) {
        log.lightCyan(user_count + ' new Users loaded to MongoDB');
    }
}
const Query = nexus_prisma_2.prismaObjectType({
    name: "Query",
    definition(t) {
        t.prismaFields([]);
    }
});
const Mutation = nexus_prisma_2.prismaObjectType({
    name: 'Mutation',
    definition(t) {
        t.prismaFields(['createUser']);
    }
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