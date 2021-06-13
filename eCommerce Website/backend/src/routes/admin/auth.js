// eCommerce Project using MERN
// Date: 12th June 2021
// Developer: Mr. Shubham Singh

// **********************************************************************************************************************************

const express = require('express');
const router = express.Router();
const { signUp, login } = require('../../controller/admin/auth');

router.post('/admin/login', login);
router.post('/admin/signUp', signUp);

module.exports = router;

// --------------------------------------------------------------The End --------------------------------------------------------------