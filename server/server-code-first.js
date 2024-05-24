import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { queryType, makeSchema } from 'nexus';

// Define the type definitions

// Code first approach
const Query = queryType({
  definition(t) {
    t.string('greeting',{
      resolve: () => "Hello World 22 !",
    });
  },
});

const schema = makeSchema({
  types: [Query],
});


// Create an instance of ApolloServer
const server = new ApolloServer({
  schema
});

// Start the server and log the URL
const { url } = await startStandaloneServer(server,{ listen: { port: 3000 }}
);
console.log(`🚀 Server ready at ${url}`);

