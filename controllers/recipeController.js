//import model recipes
const recipes = require('../models/recipeModel');

//get all  recipes
exports.getAllRecipesController = async (req, res) => {
  console.log('inside getAllRecipeController');
  try {
    const allRecipes = await recipes.find();
    res.status(200).json(allRecipes);
  } catch (err) {
    console.error('Error fetching recipes:', err.message);
  }
};
