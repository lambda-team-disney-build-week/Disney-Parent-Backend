const express = require("express");
const Comment = require("../models/comment-model");
const router = express.Router();

//GET LIST OF ALL PCOMMENTS
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.getComment();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve the comments" });
  }
});
//GET SPECEFIC ID OF COMMENT
router.get("/:id", async (req, res) => {
  const comments = await Comment.getById(req.params.id);
  try {
    if (comments) {
      res.status(200).json(comments);
    } else {
      res.status(404).json({ message: "Comment by that user not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error cant get Comment" });
  }
});
//UPDATE THE ID
router.put("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.update(req.params.id, req.body);
    if (updatedComment)
      res
        .status(200)
        .json({ message: `parent: ${updatedComment}`, CommentInfo: req.body });
  } catch (error) {
    res.status(500).json({ message: "There was Error updating the post" });
  }
});

router.post("/", async (req, res) => {
  const {username, comment } = req.body;

  if (!username || !comment) {
    res.status(400).json({ message: "Enter username and comment" });
  }
  try {
    const comments = await Comment.add(req.body);
    res.json(comments);
  } catch (err) {
    res.status(500).json({ err: "Error posting comment" });
  }
});

//DELETE WITH SPECEFIC ID
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.remove(req.params.id);
    if (comment) {
      res.status(200).json({ message: "Comment has been removed" });
    } else {
      res.status(404).json * { message: "the comment could not be removed" };
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error could not remove comment,reason why ${error}` });
  }
});
module.exports = router;
