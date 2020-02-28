const express = require('express');

const server = express();

const usersrouter = require('./users/router.js');

server.use(express.json());
server.use('/api/users', usersrouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' })
})

module.exports = server;