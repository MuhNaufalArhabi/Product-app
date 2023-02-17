const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const hashPassword = (password) => {
    return bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
};

const comparePassword = (password, hashPassword) => {
    return bcryptjs.compareSync(password, hashPassword);
}

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET, { expiresIn: '7d' });
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET);
}

module.exports = {
    hashPassword,
    comparePassword,
    generateToken,
    verifyToken
}