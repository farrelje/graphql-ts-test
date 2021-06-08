import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import cors from "cors";
import { schema } from './graphql/schema'
import { context } from './graphql/context';

const app = express();
app.use("*", cors());

// Create a GraphQL server
// It needs types and resolvers, which are defined in /types files
// types: defs of data for GraphQL to work with
// resolvers: functions that do something with types, e.g. linkage
// Context - access to DB at any time inside ApolloServer - pretty much necessary always
const server = new ApolloServer({
  schema,
  context
});

server.applyMiddleware({ app, path: "/graphql" });

export const httpServer = createServer(app);