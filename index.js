const express = require('express');
const session = require('express-session');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cors = require('cors');
// model
const { User } = require('./models');
// gql
const { graphqlHTTP } = require('express-graphql');
const { ApolloServer, AuthenticationError } = require('apollo-server-express');
const { executableSchema } = require('./Schemas');
// const schema = require('./Schemas/index.org')

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: true,
        resave: false,
        cookie: {
            httpOnly: true,
            maxAge: Number(process.env.SESSION_MAX_AGE),
        },
    })
);

//graphql
const server = new ApolloServer({
    schema: executableSchema,

    context: async ({ req }) => {
        // console.log(req.headers);
        try {
            let decodeToken;
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                throw new Error('you must Enter the correct account or password');
            }

            const token = authHeader.split(' ')[1];
            // console.log(token, 'token');
            if (!token) {
                throw new Error('you must has token');
            }
            //decode token 驗證
            decodeToken = jwt.verify(token, process.env.SECRETKEY);
            if (!decodeToken) {
                throw new Error('The token be expires');
            }

            req.isAuth = true;
            const user = await User.findById(decodeToken.userId);
            return { ...req, user };
        } catch (error) {
            return console.error(error);
        }
    },
});

server.applyMiddleware({
    app,
    path: '/graphql',
    cors: false,
    bodyParserConfig: false,
});

// mongodb
const mongoose = require('mongoose');
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => {
        console.log('connect to DB!');
    }
);
app.listen(process.env.APOLLO_SERVER_PORT, () => {
    console.log('Server running');
});
