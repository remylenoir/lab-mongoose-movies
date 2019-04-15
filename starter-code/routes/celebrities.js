const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

// Iteration #2
router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
    .then(celebrity => {
      res.render("celebrities/index", { celebrity });
    })
    .catch(err => {
      console.error(err);
    });
});

// Iteration #4
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.error("Error while creating the celebrity", err);
    });
});

// Iteration #6
router.get("/celebrities/:id/edit", (req, res, next) => {
  const _id = req.params.id;

  Celebrity.findById(_id)
    .then(celebrity => {
      res.render("celebrities/edit", { celebrity });
    })
    .catch(err => {
      console.error("Error while deleting the celebrity", err);
    });
});

router.post("/celebrities/:id/edit", (req, res, next) => {
  const _id = req.params.id;
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.findOneAndUpdate({ _id }, { name, occupation, catchPhrase })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.error("Error while deleting the celebrity", err);
    });
});

// Iteration #5
router.post("/celebrities/:id/delete", (req, res, next) => {
  const _id = req.params.id;

  Celebrity.findByIdAndRemove(_id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.error("Error while deleting the celebrity", err);
    });
});

// Iteration #3
router.get("/celebrities/:id", (req, res, next) => {
  const _id = req.params.id;

  Celebrity.findById(_id)
    .then(celebrity => {
      res.render("celebrities/show", { celebrity });
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
