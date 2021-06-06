import { httpServer } from './server';


const PORT = process.env.PORT || 3000;

httpServer.listen({ port: PORT }, (): void =>
  console.log(`🚀GraphQL-Server is running on http://localhost:3000/graphql`)
);