const data = require('./data');

//apollo
const { ApolloError } = require('apollo-server-express');
const User = require('../models/User');

exports.AuthAdmin = (callback) => async (parent, args, ctx) => {
    console.log(ctx, 123);
    try {
        if (!ctx.account) {
            throw new Error(data.errorText.errorMessage);
        }

        if (ctx.role !== data.AuthText.ADMIN) {
            throw new Error(data.errorText.errorVaildate);
        }
        return callback(parent, args, ctx);
    } catch (err) {
        console.log(err);
    }
};

exports.AuthSuper = (callback) => (parent, args, context) => {
    try {
        if (!context.account) {
            throw new Error(data.errorText.errorMessage);
        }
        if (context.role !== data.AuthText.SUPER) {
            throw new Error(data.errorText.errorVaildate);
        }
        return callback(parent, args, context);
    } catch (error) {
        console.log(err);
    }
};
