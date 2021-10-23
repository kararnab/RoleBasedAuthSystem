const express = require('express');
const router = express.Router();

// Require controller modules.
const book_controller = require('../controllers/bookController');
const auth_controller = require('../controllers/authController');
const authorize = require('../_helpers/authorize');
const role = require('../_helpers/role');

router.post("/register", (req, res, next) => {
    auth_controller.register(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Unable to register' }))
        //.catch(err => next(err));
        .catch(err => err.message ? res.status(400).json({ error: err.message }) : res.status(500).json({ error: 'Something went wrong' }));
})

router.post("/login", (req, res, next) => {
    auth_controller.login(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => err.message ? res.status(400).json({ error: err.message }) : res.status(500).json({ error: 'Something went wrong' }));
})

router.get("/books/:id", authorize(), book_controller.book_by_id);
router.get("/books", authorize(), book_controller.book_list);
router.post("/books/create", authorize(role.Admin), book_controller.book_add);
router.delete("/books/:id", authorize(role.Admin), book_controller.book_delete);

module.exports = router;