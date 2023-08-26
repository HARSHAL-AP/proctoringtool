const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  user_name:{
    type: String,
    required: true,
  },
  created_at: Date,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
