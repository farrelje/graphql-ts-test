import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import cors from "cors";
import { typeDefs } from "./schema/typeDefs"
import { resolvers } from './schema/resolvers'

const app = express();
app.use("*", cors());

// Create a GraphQL server
// It needs typeDefs and resolvers, which are sorted in the schema
// TypeDefs: mutations and defs of data
// Resolvers: functions that do something with typedefs
const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app, path: "/graphql" });

export const httpServer = createServer(app);