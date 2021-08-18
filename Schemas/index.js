const { makeExecutableSchema } = require('graphql-tools');

exports.executableSchema = {
    typeDefs: require('./graphql').mergeType.typeDefs,
    resolvers: require('./graphql').mergeType.resolvers,
};
// const executableSchema = makeExecutableSchema({
//     typeDefs: require('./graphql').mergeType.typeDefs,
//     resolvers: require('./graphql').mergeType.resolvers,
// });
