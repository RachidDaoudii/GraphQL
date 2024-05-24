import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// Define the type definitions
const typeDefs = `#graphql
  schema {
    query: Query
  } 

  type Query {
    greeting: String,
  }
`;

// Define the resolvers
const resolvers = {
  Query: {
    greeting: () => "Hello World!",
  },
};

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server and log the URL
const { url } = await startStandaloneServer(server, { port: 4000 });
console.log(`🚀 Server ready at ${url}`);

