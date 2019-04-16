const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

// Iteration #2
router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(err => {
      console.error(err);
      next();
    });
});

// Iteration #4
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const celebrity = { name, occupation, catchPhrase };

  Celebrity.create(celebrity)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.error("Error while creating the celebrity", err);
      next();
    });
});

// Iteration #6
router.get("/celebrities/:_id/edit", (req, res, next) => {
  const { _id } = req.params;

  Celebrity.findById(_id)
    .then(celebrity => {
      res.render("celebrities/edit", { celebrity });
    })
    .catch(err => {
      console.error("Error while deleting the celebrity", err);
      next();
    });
});

router.post("/celebrities/:_id/edit", (req, res, next) => {
  const { _id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  const celebrity = { name, occupation, catchPhrase };

  Celebrity.findOneAndUpdate({ _id }, celebrity)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.error("Error while deleting the celebrity", err);
      next();
    });
});

// Iteration #5
router.post("/celebrities/:_id/delete", (req, res, next) => {
  const { _id } = req.params;

  Celebrity.findByIdAndRemove(_id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.error("Error while deleting the celebrity", err);
      next();
    });
});

// Iteration #3
router.get("/celebrities/:_id", (req, res, next) => {
  const { _id } = req.params;

  Celebrity.findById(_id)
    .then(celebrity => {
      res.render("celebrities/show", { celebrity });
    })
    .catch(err => {
      console.error(err);
      next();
    });
});

module.exports = router;
