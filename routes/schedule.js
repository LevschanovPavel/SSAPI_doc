const express = require("express");
const { protect, authorize } = require("../middleware/auth");

const {
  getSchedule, getCountrySchedule
} = require("../controllers/schedule");

const router = express.Router();

router
  .route("/")
  .get(protect, authorize('admin','user'), getSchedule)

router
  .route("/:country")
  .get(protect, authorize('admin','user'), getCountrySchedule) 

module.exports = router;
