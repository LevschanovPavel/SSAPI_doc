const User = require("../models/user");
const Leagues = require("../models/leagues");
const TodayMatches = require("../models/today-matches");
const Fixtures = require("../models/fixtures");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/error-respons");
const leagues = require("../constants/leagues-list");

// @desc      Get single user
// @route     GET /
// @access    Private/Admin

exports.getAdminPage  = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  const leagues = await Leagues.find();
  res.render('admin', {users, leagues});
});


// @desc      Delete user
// @route     DELETE /users/:id
// @access    Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    data: {}
  });
});


// @desc      Create user
// @route     POST /
// @access    Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    user
  });
});

// @desc      Update League
// @route     PUT /
// @access    Private/Admin
exports.updateLeague = asyncHandler(async (req, res, next) => {
  // const user = await User.create(req.body);
const { display }  = req.query;  
const { leagueId } = req.params; 
console.log("im here", display, leagueId)

Leagues.updateOne({ id: leagueId }, { display: display }, function(err,result) {
  if (err) {
    res.send(err);
  } else {
    res.status(201).json({
      success: true
    });
  }
});

});

