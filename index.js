"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var prisma_client_1 = require("./generated/prisma-client");
var nexus_prisma_1 = require("./generated/nexus-prisma");
var path = require("path");
var nexus_prisma_2 = require("nexus-prisma");
var graphql_yoga_1 = require("graphql-yoga");
var datedash_1 = require("datedash");
var prismaExtendType = require("nexus-prisma").prismaExtendType;
var queryField = require("nexus").queryField;
var Chance = require('chance');
var chance = new Chance();
var _createUser = function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                var address, _birthday, _birthDate, new_user, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            address = function () {
                                var _address = chance.address();
                                var _city = chance.city();
                                var _state = chance.state();
                                var _zipcode = chance.postcode();
                                return _address + " " + _city + " " + _state + " " + _zipcode;
                            };
                            _birthday = chance.birthday({ string: true });
                            _birthDate = datedash_1["default"].date(_birthday, '-');
                            return [4 /*yield*/, prisma_client_1.prisma.createUser({
                                    name: chance.first(),
                                    email: chance.email()
                                })];
                        case 1:
                            new_user = _a.sent();
                            console.log(new_user);
                            resolve(new_user);
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error('User', err_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
// A `main` function so that we can use async/await
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var newUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _createUser()];
                case 1:
                    newUser = _a.sent();
                    console.log("Created new user:", JSON.stringify(newUser, null, 2));
                    return [2 /*return*/];
            }
        });
    });
}
var user_count = 12;
for (var i = 0; i < user_count; i++) {
    main()["catch"](function (e) { return console.error(e); });
    if (i === 11) {
        console.log(user_count + ' new Users loaded to MongoDB');
    }
}
var Query = nexus_prisma_2.prismaObjectType({
    name: "Query",
    definition: function (t) {
        t.prismaFields([]);
    }
});
var Mutation = nexus_prisma_2.prismaObjectType({
    name: 'Mutation',
    definition: function (t) {
        t.prismaFields(['createUser']);
    }
});
var schema = nexus_prisma_2.makePrismaSchema({
    types: [Query, Mutation],
    prisma: {
        datamodelInfo: nexus_prisma_1["default"],
        client: prisma_client_1.prisma
    },
    outputs: {
        schema: path.join(__dirname, './generated/schema.graphql'),
        typegen: path.join(__dirname, './generated/nexus.ts')
    }
});
var PrismaServer = new graphql_yoga_1.GraphQLServer({
    schema: schema,
    context: { prisma: prisma_client_1.prisma }
});
PrismaServer.start(function () { return console.log('PrismaServer is running on http://localhost:4000'); });
