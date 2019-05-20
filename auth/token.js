const jwt = require('jsonwebtoken')

const {secret} = require('../api/secret');

module.exports = {
    generateToken
};

function generateToken(parent) {
    const payload = {
        subject: parent.id,
        username: username,
        roles: ['Parent']
    };
    
    const options = {
        expiresIn: "1d"
    };
    return jwt.sign(payload, secret, options)
}