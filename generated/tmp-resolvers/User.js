"use strict";
// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.
Object.defineProperty(exports, "__esModule", { value: true });
const graphqlgen_1 = require("../graphqlgen");
exports.User = Object.assign({}, graphqlgen_1.UserResolvers.defaultResolvers, { posts: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    } });
