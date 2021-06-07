import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import cors from "cors";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from './schema/resolvers';
import { context } from './schema/context';

const app = express();
app.use("*", cors());

// Create a GraphQL server
// It needs typeDefs and resolvers, which are sorted in the schema
// TypeDefs: mutations and defs of data
// Resolvers: functions that do something with typedefs
// Context - access to DB at any time inside ApolloServer - can be handy
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

server.applyMiddleware({ app, path: "/graphql" });

export const httpServer = createServer(app);