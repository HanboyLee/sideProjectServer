// const { isEmpty } = require('lodash');

// //helpers
// const helpers = require('../../helpers');
// const { User } = require('../../models');
// module.exports = {
//     Query: {
//         getAllUsers: helpers.AuthAdmin(async (_, { ids }, context) => {
//             console.log(context);
//             if (!isEmpty(ids)) {
//                 return await User.find({ id: { $in: ids } });
//             }
//             return await User.find({});
//         }),
//         getAllUser: helpers.AuthAdmin(async (_, { id }) => await User.findById(id)),
//     },
// };
