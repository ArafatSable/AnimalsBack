const express = require("express");
const Animals = require("../models/animals");
const Cats = require("../models/cats");
const Fishes = require("../models/fishes");
const bcrypt = require("bcrypt");

const router = express.Router();

require("../db/connect");

// about us page

router.get('/dogs', async (req, res) => {
  try {
    const dogs = await Animals.find();
    res.json(dogs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/cats', async (req, res) => {
  try {
    const cats = await Cats.find();
    res.json(cats);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/fishes', async (req, res) => {
  try {
    const fishes = await Fishes.find();
    res.json(fishes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/dogs/:id', async (req, res) => {
  try {
    const dogs = await Animals.findById(req.params.id);
    res.json(dogs);
  } catch (err) {
    console.log("cannot find dog with particular id");
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/cats/:id', async (req, res) => {
  try {
    console.log("Data of cat is received");
    const cats = await Cats.findById(req.params.id);
    console.log("cats found");
    res.json(cats);
  } catch (err) {
    console.log("cannot find Cat with particular id");
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/fishes/:id', async (req, res) => {
  try {
    const fishes = await Fishes.findById(req.params.id);
    res.json(fishes);
  } catch (err) {
    console.log("cannot find Fish with particular id");
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// middleware
const middleware = (req, res, next) => {
  console.log("Helloworld");
  next();
};

router.use(middleware);

module.exports = router;
