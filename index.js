const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(( { url }) => {
    console.log(`Server started on url : ${url} `);
})

