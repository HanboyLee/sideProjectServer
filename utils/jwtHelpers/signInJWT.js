const { sign } = require('jsonwebtoken');

module.exports = (payload = {}, options = {}) => {
    // console.log(PRIVATE_KEY);
    if (!payload.exp && !options.expiresIn) options.expiresIn = '30 day';
    return sign(payload, process.env.PRIVATE_KEY, {
        ...options,
        // algorithm: 'RS256',
    });
};
