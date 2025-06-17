const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.post('/add', async (req, res) => {
  try {
    const { title, description, imageUrl, author } = req.body;
    const newRecipe = new Recipe({ title, description, imageUrl, author });
    await newRecipe.save();
    res.status(201).json({ message: 'Recipe added successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding recipe', error });
  }
});

router.get('/all', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipes', error });
  }
});

module.exports = router;
