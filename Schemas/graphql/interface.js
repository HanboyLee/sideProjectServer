const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
    #User interface.
    interface User {
        "Id of user."
        id: ID!
        "FirstName of user."
        firstName: String!
        "LastName of user."
        lastName: String!
        "Account of user."
        account: String!
    }
    "Timestamp interface."
    interface Timestamp {
        createdAt: Time!
        updatedAt: Time
    }
`;

exports.resolvers = {
    User: {
        __resolveType: (node) => node.__typename,
    },
    Timestamp: {
        __resolveType: (node) => node.__typename,
    },
};
