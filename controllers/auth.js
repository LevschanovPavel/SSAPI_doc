const User = require("../models/user");

const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/error-respons");
const leagues = require("../constants/leagues-list");

// @desc      Render signup page
// @route     Get /signup
// @access    Public
exports.signup_get = (req, res) => {
  const user = res.locals.user
  if (user) {
    (user.role === "admin")? res.redirect('admin'):res.redirect('me')
  } 
  res.render('signup');
}

// @desc      Render login page
// @route     Get /login
// @access    Public
exports.login_get = (req, res) => {
  const user = res.locals.user
  if (user) {
    (user.role === "admin")? res.redirect('admin'):res.redirect('me')
  } 
  res.render('login');
}

// @desc      Register user
// @route     POST /signup
// @access    Public
exports.signup_post = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Validate name & email & password
  if (!name) next(new ErrorResponse("Please input a name", 400))
  if (!email) next(new ErrorResponse("Please input a email", 400))
  if (!password) next(new ErrorResponse("Please input a password", 400))

  const user = await User.create({name, email, password, role });

  sendTokenResponse(user, 200, res)
});

// @desc      Login user
// @route     POST /login
// @access    Public
exports.login_post = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  
  // Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }
  
  //Check for user
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse("That email is not registered", 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse("That password is incorrect", 401));
  }
  
  sendTokenResponse(user, 200, res)
});


// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  
  //Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if(process.env.NODE_ENV === 'production') {
    options.secure = true
  }
  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token, user })
};


// @desc      Get current logged in user
// @route     GET /api/v1/auth/me
// @access    Private
exports.getMe = asyncHandler( async (req,res,next)=>{
   // const user = await User.findById(req.user.id)
  const token = req.cookies.token;

  res.render('me', {token, leagues});
})
 

// @desc      Log user out / clear cookie
// @route     GET /api/v1/auth/logout
// @access    Private
exports.logout_get = asyncHandler(async (req, res, next) => {
  res.cookie('token', '', { maxAge: 1, httpOnly: true});
  res.redirect('/');  
});


// @desc      Get Token
// @route     POST  /api/v1/auth/token
// @access    Private
exports.token = asyncHandler(async (req, res, next) => {
  let apiKey;
  
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Basic")
  ) {
    apiKey = req.headers.authorization.split(" ")[1];
  }
  else  {
    next(new ErrorResponse("Invalid apiKey", 400))
  }

  //Check for user
  const user = await User.findOne({ apiKey });
  if (!user) {
    return next(new ErrorResponse("That apiKey is not valid", 401));
  }

  //Create token
  const token = user.getSignedJwtToken();

  // console.log("apiKey",apiKey)
  // console.log("user",user)

  res
  .status(200)
  .json({ success: true, token, "token_type": "Bearer"})

});