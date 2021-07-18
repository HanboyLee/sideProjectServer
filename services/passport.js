const passport = require('passport');
const jwt = require('jsonwebtoken');
const { GraphQLLocalStrategy } = require('graphql-passport');

//modals
const { User } = require('../models');
//config
require('dotenv').config();

module.exports = passport.use(
    new GraphQLLocalStrategy(async (account, password, done) => {
        console.log(111);
        let err;
        // 帳號驗證是否存在
        const user = await User.findOne({ account });

        if (!user) {
            err = new Error('User does not exist!');
        }

        //解碼password
        const isPwdEqual = await bcrypt.compare(password, user.password);

        //驗證密碼是否正確
        if (!isPwdEqual) {
            err = new Error('Password is incorrect!');
        }

        //身份驗證

        // if (user.role === 'Super') {
        //     roleKey = process.env.SUPERS_ECRETKEY;
        // } else {
        //     roleKey = process.env.SECRETKEY;
        // }

        switch (user.role) {
            case 'super':
                roleKey = process.env.SUPERS_ECRETKEY;
                break;
            case 'admin':
                roleKey = process.env.SECRETKEY;
                break;
            default:
                roleKey = process.env.SECRETKEY;
                break;
        }

        //帳號密碼無誤 將給一組token
        const token = jwt.sign({ userId: user._id, account: user.account, roleKey }, roleKey, {
            //The token limit period at 2h
            expiresIn: '2h',
        });

        done(err, { user, token });
    })
);
