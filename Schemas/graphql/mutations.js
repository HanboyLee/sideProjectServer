const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
    #Mutation
    type Mutation {
        "Create User"
        signUp(input: InputUserNode): UserType
        "Account login of User"
        signIn(account: String!, password: String!): AuthData
        "Create product"
        createProduct(name: String!, price: Int!, categoryId: ID!, url: String, description: String): Product
        "Create category"
        createCategory(title: String!, description: String): Category
    }
`;
