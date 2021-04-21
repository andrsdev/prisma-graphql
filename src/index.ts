// import { PrismaClient } from '@prisma/client';
import 'reflect-metadata'; //Required from type-graphql
import { buildSchemaSync } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { UserResolver } from 'src/resolvers/UserResolver';
import express from 'express';
// const prisma = new PrismaClient();

const app = express();

const server = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [UserResolver],
  }),
});

server.applyMiddleware({ app });

app.listen(3000, () => {
  console.log(`Listening on http://localhost:${3000}/graphql`);
});
