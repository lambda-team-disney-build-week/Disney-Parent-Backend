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

//UPDATE THE ID

module.exports = router;
