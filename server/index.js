import { ApolloServer } from '@apollo/server';
import cors from 'cors';
import express from 'express';
import { readFile } from "node:fs/promises"
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4"
import { resolvers } from './resolvers.js';
import 'dotenv/config'

const app = express();
app.use(cors(), express.json());

app.get('/api', (req, res) => {
    res.send('Hello World hhh !!!');
});

const typeDefs = await readFile(new URL("./schema.graphql", import.meta.url), "utf-8");
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
});

await apolloServer.start();
app.use('/graphql',apolloMiddleware(apolloServer));

app.listen({port:process.env.PORT}, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
    console.log(`GraphQL endpoint: http://localhost:${process.env.PORT}/graphql`)
});
    