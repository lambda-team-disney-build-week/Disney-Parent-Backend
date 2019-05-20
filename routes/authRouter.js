const router = require("express").Router();
const bcrypt = require("bcryptjs");
const tokens = require('../auth/token');
// const db = require("../data/dbConfig");
const db = require('../models/parent-model')

router.post("/register", async (req,res) => {
  let {username,password,email, accountType} = req.body;
  if (!username || !password || !email || !accountType) {
  }
});

module.exports = router;
