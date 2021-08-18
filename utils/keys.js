const jwtTopem = require('jwk-to-pem');

exports.JWK_KEY = process.env.PRIVATE_KEY;

exports.PRIVATE_KEY = jwtTopem(exports.JWK_KEY);
