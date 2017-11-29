const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");

router.get("/", function(req, res, next) {
  UserModel.find({}, function(err, docs) {
    if(err){
      res.json({});
      return;
    }

    res.json(
      docs.map(doc => {
        return {
          id: doc.id,
          name: doc.name,
          balance: doc.balance,
          frozen: doc.frozen
        };
      })
    );
  });
});

router.get("/:id", function(req, res, next) {
  if (!req.params.id) {
    res.json({}); 
    return;
  }

  UserModel.findOne({ "id": req.params.id }, (err, doc) => {
    if(err){
      res.json({});
      return;
    }
    res.json(doc);
  });
});

module.exports = router;
