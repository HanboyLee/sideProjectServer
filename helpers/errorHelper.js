class AuthError extends Error {
    constructor(...err) {
        super(...err);
        this.name = err.name;
        this.message = err.message;
        this.stack = err.stack;
    }
}

const errorHelper = (err) => {
    return new AuthError(err);
};

const handleError = (err) => {
    let errors = { account: '', password: '', error: '' };
    //duplicate error code
    if (err.code === 11000) {
        errors.account = '帳號已存在';
        return errors;
    }
    //validation
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            // console.log(properties);
            errors[properties.path] = properties.message;
        });
        return errors;
    } else {
        return new Error(err);
    }
};

module.exports = { errorHelper, handleError };
