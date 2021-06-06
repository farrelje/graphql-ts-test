import { gql } from "apollo-server-express";

export const typeDefs = gql`
  # GraphQL can have comments

  # Types: define anything here that you want to receive back
  # If you don't define it here, you can get it!
  # ! = required
  type User {
    name: String!,
    age: Int!,
    email: String!,
    passwordHash: String!,
    location: String
  }

  # Queries: define name and return type
  type Query {
    getAllUsers: [User!]!
  }

  input UserInput {
    name: String!,
    age: Int!,
    email: String!,
    passwordHash: String!,
    location: String
  }

  # Mutations:
  type Mutation {
    createUser(input: UserInput): User!
  }


`;
