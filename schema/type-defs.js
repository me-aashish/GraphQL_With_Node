const { gql } = require('apollo-server');

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        age: Int!
        nationality: String!
        friends: [User]
        favouriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheatres: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!

    }

    input createUserInput {
        name: String!
        age: Int!
        nationality: Nationality = INDIAN
    }

    type Mutation {
        createUser(input : createUserInput!) : User!
    }

    enum Nationality {
        INDIAN
        AMERICAN
        British
        PAKISTANI
    }
`;

module.exports = typeDefs;