const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    let masterPassForMock = "aaaaaaa"
    if (req.body.password === masterPassForMock) {
        res.send(require('../mockFiles/loginMock/loginSuccess.json'));
    } else {
        res.send(require('../mockFiles/loginMock/loginError.json'));
    }
})

module.exports = router;