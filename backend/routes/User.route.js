const express = require("express");
const { UserModel } = require("../models/User.model");
const bycript = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userauthonticate } = require("../midlewere/authonticate.middleware");
const userRoute = express.Router();

userRoute.get("/getall", async (req, res) => {
  const data = await UserModel.find();
  return res.status(200).json({
    isError: false,
   data
  });
});

userRoute.post("/login", async (req, res) => {
  const { email, user_name } = req.body;
  try {
    const user = await UserModel.findOne({ $or: [{ email }, { user_name }] });

    if (user) {
      const token = jwt.sign({ userId: user._id }, "masai", {
        expiresIn: "1h",
      });

      return res.status(200).json({
        isError: false,
        messege: `Login sucsessfull....`,
        token,
      });
    } else {
      const newUser = new UserModel({
        email,
        user_name,
      });
      await newUser.save();
      const token = jwt.sign({ userId: newUser._id }, "masai", {
        expiresIn: "1h",
      });

      return res.status(200).json({
        isError: false,
        messege: `Account created and Login sucsessfull....`,
        token,
      });
    }
  } catch (error) {
    res.send({
      isError: true,
      messege: `Login failed....`,error
    });
   
  }
});

module.exports = {
  userRoute,
};
