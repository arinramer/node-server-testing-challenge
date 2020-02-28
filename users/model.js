const db = require('../data/dbConfig.js');

module.exports = {
    add,
    getUsers,
    remove
}

function add(body) {
    return db('users')
    .insert(body)
}

function getUsers() {
    return db('users')
}

function remove(id) {
    return db('users')
    .delete()
    .where({ 'users.id': id })
}