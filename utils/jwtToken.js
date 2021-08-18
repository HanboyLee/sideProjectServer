const crypto = require('crypto');
const jwt = require('jwt-simple');

// configs
// const { JWT_SECRET } = require('env');

// create jwt token
module.exports = (user, exp = 60 * 60 * 24 * 30) => {
    const timestamp = Math.floor(new Date().getTime() / 1000);
    const expireAt = timestamp + exp; // default 30 days
    const hash = crypto.createHash('sha256');

    hash.update(user.accessToken);
    hash.update(process.env.SECRETKEY);
    hash.update(expireAt.toString());

    return jwt.encode(
        {
            sub: user._id,
            iat: timestamp,
            exp: expireAt,
            hash: hash.digest('hex'),
        },
        JWT_SECRET
    );
};
