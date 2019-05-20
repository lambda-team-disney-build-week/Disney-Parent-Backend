const router = require("express").Router();
//MODELS
const Parents = require("../models/parent-model");
const Post = require("../models/post-model");
// const Comment = require("../models/post-model");

const db = require('../data/dbConfig');

//MIDDLEWARE
const restricted = require("../auth/restricted");
//ROLE MIDDLEWARE
const checkRole = require('../auth/checkRole');
//PASSWORD ENCRYPTION
const bcrypt = require("bcryptjs");

// //GET LIST OF ALL PARENTS
// router.get('/', restricted, checkRole('Parent'), (req, res) => {
//     Parents.find()
//       .then(parents => {
//         res.json(parents);
//       })
//       .catch(err => res.send({ message: 'Could not retrieve the list of parents'}));
//   });
// //GET SPECEFIC ID OF PARENT
// router.get('/:id', restricted, checkRole('Parent'), (req, res) => {
//     Parents.findById(req.params.id)
//       .then(parent => {
//         res.json(parent);
//       })
//       .catch(err => res.send({ message: 'Could not get the specefic ID'}));
//   });
// //UPDATE THE ID
// router.put('/:id', restricted, (req,res) => {
//     Parents.update(req.params.id, req.body)
//     .then(updatedUser => {
//       res.json({ updatedUserId: updatedUser, dataUpdated: req.body });
//     })
//     .catch(err => res.send({ message: 'Could not update the information'}));
// })
// //DELETE 
// router.delete('/:id', restricted, checkRole('Parent'), (req,rest) => {
//     let user = req.body;
//     Parents.remove(req.params.id).then(user => {
//         res.json(user);
//     })
//     .catch(err => res.send({ message: 'Could not delete this account'}));
// })

//GET LIST OF ALL PARENTS
router.get('/', async(req,res) => {
    try {
        const parents = await Parents.getParents();
        if(parents) {
            res.status(200).json(parents)
        }
    } catch (error) {
        res.status(500).json({error: 'Could not retrieve list of parents.'});
    }
})
//GET SPECEFIC ID OF PARENT
router.get('/:id', restricted, (req, res) => {
    let id = req.params.id;
    db('users')
        .where({id})
        .first()
        .then(users => {
        res.json(users);
        })
        .catch(err => res.send(err));
});
//UPDATE THE ID
router.put('/:id', restricted, (req, res) => {
    let id = req.params.id;

    if (req.body.password){
        const hash = bcrypt.hashSync(req.body.password, 10);
        req.body.password = hash;
    }

    db('users')
        .update(req.body)
        .where({id})
        .then(users => {
        res.json(users);
        })
        .catch(err => res.send(err));
});
//DELETE 
router.delete('/:id', restricted, checkRole('Parent'), async(req,res) => {
try {
    const parents = await Parents.getById(req.params.id);
    if(parents) {
        const post = await postMessage.get
    }
} catch (error) {
    
}
})
module.exports = router;
