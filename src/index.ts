// import { PrismaClient } from '@prisma/client';
import 'reflect-metadata'; //Required from type-graphql
import { buildSchemaSync } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { UserResolver } from 'src/resolvers/UserResolver';
// const prisma = new PrismaClient();
const app = express();

const server = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [UserResolver],
  }),
});

server.applyMiddleware({ app });

app.listen(3000, () => {
  console.log(`Listening on http://localhost:${3000}`);
});
