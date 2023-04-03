const express = require('express');
const router = express.Router();

const authRouter = require('../controllers/auth');

router.post('/sign-up', authRouter.signUp);

router.post('/sign-in', authRouter.signIn);

module.exports = router;
