// eCommerce Project using MERN
// Date: 12th June 2021
// Developer: Mr. Shubham Singh

// **********************************************************************************************************************************

const express = require('express');
const router = express.Router();
const { signUp, login, requireSignIn } = require('../controller/auth');

router.post('/login', login);
router.post('/signUp', signUp);

router.post('/profile', requireSignIn, (req, res) => {
    res.status(200).json({ user: 'profile' });
});


module.exports = router;

// --------------------------------------------------------------The End --------------------------------------------------------------