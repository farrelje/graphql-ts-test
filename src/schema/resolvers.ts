import { ApolloError } from "apollo-server-express";
import { FakeDB } from "../fakeDb/users"
import User from "../fakeDb/users"
// Database queries and the rest done here

export const resolvers = {
  Query: {
    // Could also be SQL or ORM calls instead of this
    getAllUsers: async () => {
      try {
        return FakeDB;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  Mutation: {
    // parent, args, context...
    // Not sure of types yet
    createUser(parent: any, args: any) {
      // Works, but surely there's got to be a better way to do this with types
      // input does nothing, and args: User is undefined, so build myself?
      const { name, age, email, passwordHash, location } = args.input;
      const newUser = new User(name, age, email, passwordHash, location)
      FakeDB.push(newUser)
      return newUser
    }
  }
  // Can also do mutations here
};