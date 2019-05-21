const jwt = require('jsonwebtoken')

const secrets = require('../api/secret');

module.exports = {
    generateToken
};

function generateToken(parent) {
    const payload = {
        subject: parent.id,
        username: parent.username,
        roles: ['Parent']
    };
    
    const options = {
        expiresIn: "1d"
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
}