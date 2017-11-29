var express = require("express");
var router = express.Router();
const UserModel = require("../models/user");

router.post("/user/:id/transaction", function(req, res, next) {
  if (!req.params.id) {
    res.json({});
    return;
  }

  let value = req.body.value;

  if (!value || value <= 0) {
    res.send(500, {});
    return;
  }

  UserModel.findOneAndUpdate(
    { id: req.params.id },
    { $inc: { balance: -value } },
    {
      returnNewDocument : true
    },
    function(err, doc) {
      if (err) {
        res.send(500,{});
        return;
      }
      res.json(doc);
    }
  );
});

module.exports = router;
