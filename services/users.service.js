const config = require('../config.json');
const jwt = require('jsonwebtoken');

// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: '661fc96c301de0337b3a75cc', prenom: 'Adrien', nom: 'Calais'}];

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ prenom, nom }) {
    const user = users.find(u => u.prenom === prenom && u.nom === nom);

    if (!user) throw 'Username or password is incorrect';

    // create a jwt token that is valid for 1 hour
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '1h' });

    return {
        ...omitPassword(user),
        token
    };
}

async function getAll() {
    return users.map(u => omitPassword(u));
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}