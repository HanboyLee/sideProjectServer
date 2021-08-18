const { verify, JsonWebTokenError } = require('jsonwebtoken');

module.exports = async (token, options = {}) => {
    const decoded = verify(token, process.env.PRIVATE_KEY, { ...options });

    return decoded;
};
