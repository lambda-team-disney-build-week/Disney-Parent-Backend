const router = require("express").Router();
//MODELS
const Parents = require("../models/parent-model");
const Post = require("../models/post-model");
// const Comment = require("../models/post-model");

//MIDDLEWARE
const {restricted,role} = require("../auth/restricted");
//PASSWORD ENCRYPTION
const bcrypt = require("bcryptjs");

//GET LIST OF ALL PARENTS

//GET SPECEFIC ID OF PARENT

//UPDATE THE ID
module.exports = router;
