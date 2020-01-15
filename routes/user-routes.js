const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/all", (req, res) => {
  db.User.findAll({
    include: [db.Profile]
  }).then(users => {
    res.send(users);
  });
});

router.post("/new", (req, res) => {
  db.User.create({
    username: req.body.userName
  }).then(newUser => {
    res.send(newUser);
  });
});

module.exports = router;
