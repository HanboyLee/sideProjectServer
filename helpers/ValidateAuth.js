const data = require('./data');

//apollo
const { ApolloError } = require('apollo-server-express');
const User = require('../models/User');

exports.AuthAdmin = (callback) => async (parent, args, context) => {
    // console.log(parent, args, context, 123);
    try {
        if (!context.user.account) {
            throw new Error(data.errorText.errorMessage);
        }

        if (context.user.role !== data.AuthText.ADMIN) {
            throw new Error(data.errorText.errorVaildate);
        }
        console.log(parent, args, context);
        return callback(parent, args, context);
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
