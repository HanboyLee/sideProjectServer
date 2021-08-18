const { verifyJWT } = require('../jwtHelpers');
const _ = require('lodash');
const { User } = require('../../models');

module.exports = async (req, res, next) => {
    const authorization = (req.headers.authorization || '').split(' ');
    const token = authorization[0] === 'Bearer' || authorization[0] === 'bearer' ? authorization[1] : '';
    if (token) {
        try {
            // const { sub, aud, typ, exp } = await verifyJWT(token);
            const { sub, typ } = await verifyJWT(token);
            if (typ === 'access_token') {
                const user = await User.findById(sub).lean();
                const users = _.omit(user, ['_id']);
                req.user = { id: user._id, ...users };
                // if (user) {
                //     const _hash = crypto.createHash('sha256');
                //     _hash.update(user.password);
                //     _hash.update(getPrivateKey());
                //     _hash.update(exp.toString());

                //     if (hash === _hash.digest('hex')) req.user = User.typeSchema.cast(user, { stripUnknown: true });
                // }
            }
        } catch (error) {}
    }
    next();
};
