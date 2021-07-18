const { makeExecutableSchema } = require('graphql-tools');

const executableSchema = makeExecutableSchema({
    typeDefs: require('./TypeDefs').typeDefs,
    resolvers: require('./Resolvers'),
});
module.exports = {
    executableSchema,
};
