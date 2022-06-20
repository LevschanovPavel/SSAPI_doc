const express = require("express");

const {
  getMatchBets
} = require("../controllers/match-bets");

const router = express.Router();

router
  .route("/:id")
  .get(getMatchBets)

module.exports = router;  