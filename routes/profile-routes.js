const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/find/:id", (req, res) => {
  db.Profile.findAll({
    where: { UserId: req.params.id },
    include: [db.User]
  }).then(profile => {
    res.send(profile);
  });
});

router.post("/new", (req, res) => {
  db.Profile.create({
    name: req.body.name,
    UserId: req.body.userId
  }).then(newProfile => {
    res.send(newProfile);
  });
});

module.exports = router;
