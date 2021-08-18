// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// // validate Auth
// const helpers = require('../../helpers');

// //apollo
// // const { ApolloError } = require('apollo-server-express');
// // db
// const { User, Category } = require('../../models');

// module.exports = {
//     Mutation: {
//         signUp: async (_, { input }, req) => {
//             try {
//                 console.log(input, 1111);
//                 // const existingUser = await User.findOne({ account: input.account });

//                 //是否有相同的帳號存在
//                 // if (existingUser) {
//                 //     throw new Error('User exist already');
//                 // }

//                 //幫密碼加密
//                 const hashPwd = await bcrypt.hash(input.password, 10);

//                 const user = new User({
//                     ...input,
//                     password: hashPwd,
//                     role: 'admin',
//                 });

//                 const result = await user.save();
//                 console.log(result);
//                 return result;
//             } catch (err) {
//                 return helpers.handleError(err);
//             }
//         },
//         signIn: async (_, { account, password }, context) => {
//             try {
//                 console.log(context, 'context');
//                 // console.log(context.user);
//                 let roleKey;
//                 //找到一樣的帳號是否在資料庫內
//                 const user = await User.findOne({ account });

//                 // 帳號驗證是否存在
//                 if (!user) {
//                     throw new Error('User does not exist!');
//                 }

//                 //解碼password
//                 const isPwdEqual = await bcrypt.compare(password, user.password);

//                 //驗證密碼是否正確
//                 if (!isPwdEqual) {
//                     throw new Error('Password is incorrect!');
//                 }

//                 //身份驗證
//                 // if (context.user === 'Super') {
//                 //     roleKey = process.env.SUPERS_ECRETKEY;
//                 // } else {
//                 //     roleKey = process.env.SECRETKEY;
//                 // }

//                 switch (context.user) {
//                     case 'super':
//                         roleKey = process.env.SUPERS_ECRETKEY;
//                         break;
//                     case 'member':
//                         roleKey = process.env.SECRETKEY;
//                         break;
//                     default:
//                         roleKey = process.env.SECRETKEY;
//                         break;
//                 }

//                 // console.log(roleKey);
//                 //帳號密碼無誤 將給一組token
//                 const token = jwt.sign(
//                     { userId: user._id, account: user.account, roleKey: process.env.SECRETKEY },
//                     process.env.SECRETKEY,
//                     {
//                         //The token limit period at 2h
//                         expiresIn: '1D',
//                     }
//                 );xs

//                 return {
//                     userId: user._id,
//                     role: user.role,
//                     token,
//                     account: user.account,
//                     tokenExpiration: 60 * 60 * 24,
//                 };
//             } catch (err) {
//                 return helpers.handleError(err);
//             }
//         },
//         createCategory: helpers.AuthAdmin(async (_, args, context) => {
//             try {
//                 const category = await new Category({
//                     title: args.title,
//                     description: args.description,
//                 }).save();
//                 console.log(category, '111');
//                 return category;
//             } catch (err) {
//                 console.log(err);
//             }
//         }),
//     },
// };
