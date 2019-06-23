// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { TaxIdConnectionResolvers } from "../resolvers";

export const TaxIdConnection: TaxIdConnectionResolvers.Type = {
  ...TaxIdConnectionResolvers.defaultResolvers,

  aggregate: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
