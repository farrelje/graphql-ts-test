import { ApolloError } from "apollo-server-express";
import { Context } from './context'
// Database queries and the rest done here

export const resolvers = {
  Query: {
    // Could also be SQL or ORM calls instead of this
    getAllUsers(_parent: any, _args: any, context: Context) {
      try {
          return context.prisma.user.findMany({
            include: {
              schematics: true,
            },
          })
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  // Todo: redo for live database version
  // Mutation: {
  //   // parent, args, context...
  //   // Not sure of types yet
  // }
  // Can also do mutations here
};