const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: Number,
  name: String,
  balance: Number,
  frozen: Boolean
});

module.exports = mongoose.model("users", UserSchema);
