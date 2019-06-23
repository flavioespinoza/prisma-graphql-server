// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { PhoneNumberResolvers } from "../resolvers";

export const PhoneNumber: PhoneNumberResolvers.Type = {
  ...PhoneNumberResolvers.defaultResolvers,

  owner: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  attribute: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
