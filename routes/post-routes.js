const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/find/:id", (req, res) => {
  db.Post.findAll({
    where: { UserId: req.params.id },
    include: [db.User]
  }).then(userPosts => {
    res.send(userPosts);
  });
});

router.post("/new", (req, res) => {
  db.Post.create({
    text: req.body.text,
    UserId: req.body.userId
  }).then(newPost => {
    res.send(newPost);
  });
});

module.exports = router;
