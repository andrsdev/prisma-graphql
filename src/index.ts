import 'reflect-metadata'; //Required for type-graphql
import { buildSchemaSync } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { HelloResolver } from 'src/resolvers/HelloResolver';
import { UserResolver } from 'src/resolvers/UserResolver';
import express from 'express';

const app = express();

const server = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [HelloResolver, UserResolver],
  }),
});

server.applyMiddleware({ app });

app.listen(3000, () => {
  console.log(`Listening on http://localhost:${3000}/graphql`);
});
