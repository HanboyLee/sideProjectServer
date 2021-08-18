// module.exports = UserType;
const { merge } = require('lodash');
exports.mergeType = [
    require('./mutations'),
    require('./query'),
    require('./Types'),
    // require('./interface'),
    require('./mutationResolvers'),
    require('./queryResolvers'),
].reduce(
    ({ typeDefs, resolvers }, type) => {
        return {
            typeDefs: type.typeDefs ? typeDefs.concat(type.typeDefs) : typeDefs,
            resolvers: type.resolvers ? merge(resolvers, type.resolvers) : resolvers,
        };
    },
    { typeDefs: [], resolvers: {} }
);
