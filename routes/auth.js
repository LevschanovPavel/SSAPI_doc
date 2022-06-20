const express = require("express");

const { 
  signup_get, 
  signup_post, 
  login_get, 
  login_post, 
  logout_get, 
  getMe, 
  token 
} = require("../controllers/auth");
 
const { protect, requireAuth, checkUser } = require("../middleware/auth");

const router = express.Router();

router.get('/signup', checkUser, signup_get);
router.post('/signup', signup_post);

router.get('/login', checkUser, login_get);
router.post('/login', login_post);

router.get('/logout', logout_get);

router.get('/me', requireAuth, getMe);
router.get('/token', token);


module.exports = router;  