const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
    #Query
    type Query {
        "get All User"
        getAllUsers(ids: [ID!]): [UserType]
        getAllUser(id: ID!): UserType
    }
`;
