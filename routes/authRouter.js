const router = require("express").Router();
const bcrypt = require("bcryptjs");
const tokenService = require('../auth/token');
const db = require("../data/dbConfig");
const parents = require('../models/parent-model')

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
  
    db('parents')
      .insert(user).returning()
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
          console.log(error)
        res.status(500).json({ message: 'Error registering account' });
      });
  });
  
  router.post('/login', (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = tokenService.generateToken(user);
          res.status(200).json({
            message: `Welcome ${user.username}!, have a token...`,
            token,
            roles: token.roles,
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json({ message: "Session Timed Out"});
      });
  });


module.exports = router;
