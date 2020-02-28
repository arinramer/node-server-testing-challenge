const router = require('express').Router();

const users = require('./model.js');

router.get('/', (req, res) => {
    users.getUsers()
    .then(users => {
        res.status(200).json(users)
    })
})

router.post('/register', (req, res) => {
    users.add(req.body)
    .then(newuser => {
        res.status(201).json(newuser)
    })
})

router.delete('/delete/:id', (req, res) => {
    users.remove(req.params.id)
    .then(removed => {
        res.status(200).json(removed)
    })
})

module.exports = router;