const express = require('express');
const router = express.Router();


const User = require('../models/user');

const Animals = require("../models/animals");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticate = require('../middleware/authenticate')


router.post("/register", async (req, res) => {
    console.log("Request received:", req.body);
    const { email, name, password } = req.body;
    if (!email || !name || !password) {
        return res.status(422).json({ error: "Pls fill the full registration form" });

    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email Already registration form" });
        }
        else {
            const user = new User({ email, name, password });
            await user.save();
            res.status(201).json({ success: true, message: "New User has been registered" });
        }
    } catch (err) {
        console.log(err);
    }
});

//login route
router.post("/signin", async (req, res) => {
    try {
      let token;
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ error: "Invalid Credentials" });
      }
      const userLogin = await User.findOne({ email: email });
  
      if (userLogin) {
        const isMatch = await bcrypt.compare(password, userLogin.password);
        token = await userLogin.generateAuthToken();
        console.log(token);
  
        console.log(userLogin);
        if (!isMatch) {
          res.status(400).json({ error: "Invalid Credentials" });
        } else {
          res.json({ success: true, token: token }); // return token in response body
        }
      } else {
        res.status(400).json({ error: "Invalid Credentials" });
      }
    } catch (error) {
      console.log(error);
    }
  });
  
router.get('/logout', (req, res) => {
    console.log("User has logout");
    res.status(200).send("User Logout");
    localStorage.clear();
    res.clearCookie('jwtoken',{path:'/'})
})
router.get('/about',authenticate,async(req, res) => {
    console.log("Hello my about");
    res.send(req.rootUser);
  })
module.exports = router;