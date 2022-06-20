const jwt = require("jsonwebtoken");
const asyncHandler = require("./async");
const ErrorResponse = require("../utils/error-respons");
const User = require("../models/user");

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  const { DEMO_API_KEY } = req.query

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  else if (req.cookies.token) {
    token = req.cookies.token
  }
   
  // Make sure token exists
  if (!token&&!DEMO_API_KEY) {
    return next(new ErrorResponse("Not autorize to access this route"));
  }

  try {
    if (DEMO_API_KEY && DEMO_API_KEY===process.env.DEMO_API_KEY) {
      req.user = await User.findOne({apiKey:DEMO_API_KEY});
    } else {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
    }
    next();
  } catch (err) {
    return next(new ErrorResponse("Not autorize to access this route", 401));
  }
});
  
// Grant access to specific roles
exports.authorize=(...roles) => {
  return (req,res,next) => {
    if(!roles.includes(req.user.role)){
      return next(new ErrorResponse(`User role ${req.user.role} is unauthorized`, 403));
    }
    next()
  }
}

// check authorization
exports.requireAuth = (req, res, next) => {
  const token = req.cookies.token;
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};

// check current user
exports.checkUser = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  const { DEMO_API_KEY } = req.query

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else if (DEMO_API_KEY && DEMO_API_KEY===process.env.DEMO_API_KEY) {
    let user = await User.findOne({apiKey:DEMO_API_KEY});
    res.locals.user = user;
    res.locals.demo = true;
    next();
  } else {
    res.locals.user = null;
    next();
  }
});

// check current user
exports.demo = asyncHandler(async (req, res, next) => {
  const isDemo = Object.values(req.params).some(p=>p === 'demo')
  console.log(isDemo)
  console.log(req.params)
  if (isDemo) next('route');
  else next(); 
})