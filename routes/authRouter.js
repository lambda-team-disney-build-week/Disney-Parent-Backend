const router = require("express").Router();
const tokens = require("../auth/token");
const db = require("../data/dbConfig");
const secret = require('../api/secret');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const Users = require("../models/parent-model");

router.post("/parents/register", (req, res) => {
  const user = req.body;

  if (!user.username || !user.password || !user.email || !user.accountType) {
    res.status(400).json({
      error: "Please fill out all of the fields"
    });
  } else {
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;
    console.log("hi");
    db("parents")
      .insert(user)
      .then(ids => {
        console.log("******", ids);
        const id = ids[0];

        db("parents")
          .where({ id })
          .first()
          .then(user => {
            const token = tokens.generateToken(user);
            res
              .status(201)
              .json({ id: user.id, username: user.username, token });
          })
          .catch(error => {
            res.status(500).json({
              error: "There was an error while saving the user to the database."
            });
          });
      })
      .catch(error => {
        res.status(400).json({
          error: "This username already exists!"
        });
      });
  }
});

router.post("/parents/login", (req, res) => {
  let { username, password, email, accountType } = req.body;
  if (!username || !password || !email || !accountType) {
    res.status(400).json({
      error: "Please provide a username and password."
    });
  } else {
    db("parents")
      .where({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = tokens.generateToken(user);
          res
            .status(200)
            .json({ message: `${user.username} is logged in.`, token });
        } else {
          res.status(401).json({
            error: "Please provide the correct username and password."
          });
        }
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while logging in."
        });
      });
  }
});

module.exports = router;
