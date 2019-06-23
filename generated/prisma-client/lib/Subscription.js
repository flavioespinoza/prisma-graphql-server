"use strict";
// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var resolvers_1 = require("../resolvers");
exports.Subscription = __assign({}, resolvers_1.SubscriptionResolvers.defaultResolvers, { attribute: {
        subscribe: function (parent, args, ctx) {
            throw new Error("Resolver not implemented");
        }
    }, taxId: {
        subscribe: function (parent, args, ctx) {
            throw new Error("Resolver not implemented");
        }
    }, identityProof: {
        subscribe: function (parent, args, ctx) {
            throw new Error("Resolver not implemented");
        }
    }, phoneNumber: {
        subscribe: function (parent, args, ctx) {
            throw new Error("Resolver not implemented");
        }
    }, user: {
        subscribe: function (parent, args, ctx) {
            throw new Error("Resolver not implemented");
        }
    }, email: {
        subscribe: function (parent, args, ctx) {
            throw new Error("Resolver not implemented");
        }
    } });
