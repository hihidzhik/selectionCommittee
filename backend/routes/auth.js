const express = require('express');
const router = express.Router();

const authRouter = require('../controllers/auth');

router.post('/sign-up', authRouter.signUp);

router.post('/sign-in', authRouter.signIn);

router.get('/whoami', authRouter.whoAmI);

module.exports = router;
