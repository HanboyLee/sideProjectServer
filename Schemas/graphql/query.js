const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
    #Query
    type Query {
        "get All User"
        getAllUsers(ids: [ID!]): [UserType]
        "get User"
        getUser(id: ID!): UserType
        "get current user"
        me: AuthData
    }
`;
