// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { TaxIdResolvers } from "../resolvers";

export const TaxId: TaxIdResolvers.Type = {
  ...TaxIdResolvers.defaultResolvers,

  owner: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
