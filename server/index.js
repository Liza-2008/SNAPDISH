const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/snapdish', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected ✅');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Recipe schema
const recipeSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  description: String,
  author: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// POST route to add recipe
app.post('/api/recipes/add', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json({ message: 'Recipe saved!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to save recipe' });
  }
});

// GET route (optional: to fetch recipes)
app.get('/api/recipes', async (req, res) => {
  const recipes = await Recipe.find().sort({ _id: -1 });
  res.json(recipes);
});

// Start the server
const PORT = 5000;
app.get('/', (req, res) => {
  res.send('✅ Backend is working');
});
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

