const graphql = require('graphql')
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList, GraphQLNonNull } = graphql
const userData = require('../MOCK_DATA.json')

const UserType = require('./TypeDefs')

const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: { ids: { type: new GraphQLList(GraphQLNonNull(GraphQLInt)) } },
            resolve(parent, { ids }) {
                let newDatas = []
                if (Array.isArray(ids)) {
                    for (const user of userData) {
                        for (const id of ids) {
                            user.id === id && newDatas.push(user)
                        }
                    }
                    return newDatas
                }
                return userData
            },
        },
        getAllUser: {
            type: UserType,
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return userData.find((item) => item.id === args.id)
            },
        },
    },
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(parent, args) {
                console.log(userData.length + 1)
                userData.push({
                    id: userData.length + 1,
                    ...args,
                })

                return { id: userData.length + 1, ...args }
            },
        },
    },
})

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })
