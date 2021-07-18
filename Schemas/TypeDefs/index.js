// module.exports = UserType;

const typeDefs = [require('./Mutations'), require('./Query'), require('./Types')].reduce(
    ({ typeDefs }, type) => ({ typeDefs: type.typeDefs ? typeDefs.concat(type.typeDefs) : typeDefs }),
    { typeDefs: [] }
);
module.exports = typeDefs;
