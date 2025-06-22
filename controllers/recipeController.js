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


// get any specific recipe details
exports.getRecipeController=async(req,res)=>{
  console.log("Inside get Recipe controller")
  const {id}=req.params;  //to access data from url
  console.log(id);
  try {
    const recipe=await recipes.findById({_id:id});
    res.status(200).json(recipe)
  } catch (error) {
res.status(401).json(error)    
  }
}


//related recipes
exports.relatedRecipeController=async(req,res)=>{
  console.log("Inside related recipe controller")
  const cuisineType=req.query.cuisine;
  console.log('cuisine type:',cuisineType)

  try {
    const relatedRecipes=await recipes.find({cuisine:cuisineType})
    res.status(200).json(relatedRecipes)
  } catch (error) {
    res.status(401).json(error)
  }
}