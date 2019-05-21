const express = require("express");
const Comment = require("../models/comment-model");
const router = express.Router();

//GET LIST OF ALL PCOMMENTS
router.get('/', async(req, res) => {
    try {
        const comments = await Comment.getComment();
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json({ error: "Could not retrieve the comments"})
    }
})
//GET SPECEFIC ID OF COMMENT
router.get('/:id', (req, res) => {
    let id = req.params.id;
    db('comments')
        .where({id})
        .first()
        .then(users => {
        res.json(users);
        })
        .catch(err => res.send(err));
});
//UPDATE THE ID
router.put('/:id', async(req,res) => {
    try {
        const updatedComment = await Comment.update(req.params.id, req.body);
        if(updatedComment)
            res.status(200).json({message: `parent: ${updatedComment}`, CommentInfo:req.body})
    } catch (error) {
        res.status(500).json({ message: "There was Error updating the post"})
    }
})

//DELETE WITH SPECEFIC ID
router.delete('/:id', async(req,res) =>{
    try {
        const comment = await Comment.remove(req.params.id);
        if (comment) {
            res.status(200).json({ message: 'Comment has been removed'})
        } else {
            res.status(404).json*{ message: "the comment could not be removed"}
        }
    } catch (error) {
        res.status(500).json({message: `Error could not remove comment,reason why ${error}`})
    }
})
module.exports = router;
