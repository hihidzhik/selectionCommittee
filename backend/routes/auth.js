const express = require('express');
const router = express.Router();

router.post('/sign-up', (req, res, next) => {
  console.log(req.body);
  res.send('respond with a resource');
});

module.exports = router;