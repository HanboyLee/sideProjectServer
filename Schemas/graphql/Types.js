const { gql } = require('apollo-server-express');

// module.exports = UserType;

exports.typeDefs = gql`
    type Time {
        "createdAt of Date"
        createdAt: Time
        "createdAt of Date"
        updatedAt: Time
    }

    #input
    input InputUserNode {
        firstName: String
        "lastName of user"
        lastName: String
        "email of user"
        email: String
        "account of User"
        account: String!
        "password of user"
        password: String!
    }

    #image
    type Image {
        "id of image"
        id: ID
        "url of image"
        url: String
        "date of image"
        date: Time
        "appertaining Id of Image"
        _appertaining: ID
    }

    #Product
    type Product {
        "Id of product"
        id: ID
        "name of product"
        name: String
        "price of product"
        price: Int
        "description of product"
        description: String
        "Multiple image of products"
        images: [Image]
        "category of Product"
        category: Category
        "Id of category"
        _category: ID
        "Id of category"
        _ImagesIds: [ID]
    }

    #category
    type Category {
        "Id of category"
        id: ID
        "title of category"
        title: String
        "description of category"
        description: String
        "Multiple product of category"
        product: [Product]
        "productIds of category"
        productIds: [ID]
        "dateTime"
        Date: Time
    }

    #Order of user
    type Order {
        "ID of order"
        id: ID
        "Price of order"
        orderPrice: Int
        "Details of buy products"
        products: [Product]
        "Ids of Product"
        _productIds: [ID]
        "ID of User"
        _user: ID
        "Date of Order"
        Date: Time
    }

    # # union
    # union UserAuth = UserType | AuthData

    type Contact {
        "Id of contact"
        id: ID
        "address of user"
        address: String
        "email of user"
        email: String
        "phone of user"
        phone: Int
        "Date"
        Date: Time
    }

    #User Type
    type UserType {
        "Id of user."
        id: ID!
        "avatar of user."
        avatar: Image
        "firstName of user."
        firstName: String!
        "lastName of user."
        lastName: String!
        "account of user."
        account: String!
        "password of user."
        password: String
        "Orders of user."
        orders: [Order]
        "Orders ID of user."
        _orders: [ID]
        "contact of user."
        contact: [Contact]
        "Date of user."
        Date: Time
    }

    #Auth
    type AuthData {
        "Id of User"
        id: ID!
        "Account of User"
        account: String!
        "token of User"
        token: String!
        "Expiration Time"
        tokenExpiration: Int!
        "User role"
        role: String!
    }
`;

// # fragment userInfoFragment on userInfo {
// #     userId
// #     account
// #     token
// #     tokenExpiration
// #     role
// # }
//   #Query

//     #Mutation
//     type Mutation {
//         "Create User"
//         signUp(input: InputUserNode): UserType
//         "Account login of User"
//         signIn(account: String!, password: String!): AuthData
//         "Create product"
//         createProduct(name: String!, price: Int!, categoryId: ID!, url: String, description: String): Product
//         "Create category"
//         createCategory(title: String!, description: String): Category
//     }
// module.exports = typeDefs;
