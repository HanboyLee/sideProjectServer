const { isEmpty } = require('lodash');

//helpers
const helpers = require('../../helpers');
const { User } = require('../../models');
exports.resolvers = {
    Query: {
        getAllUsers: helpers.AuthAdmin(async (_, { ids }, context) => {
            console.log(context);
            if (!isEmpty(ids)) {
                return await User.find({ id: { $in: ids } });
            }
            return await User.find({});
        }),
        getUser: helpers.AuthAdmin(async (_, { id }) => await User.findById(id)),
        me: helpers.AuthAdmin(async (_, __, ctx) => {
            console.log(ctx, 111);

            return ctx;
        }),
    },
};
