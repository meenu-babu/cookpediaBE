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


// add new recipe in admin panel
exports.addRecipeController=async(req,res)=>{

  // get all inputs from FE
  const {name,ingredients, instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty, cuisine,caloriesPerServing,image,mealType}=req.body
  try {
    const existingRecipe=await recipes.findOne({name:name})
    if(existingRecipe){
      res.status(406).json(`${name} already exists in our collection`)
    }
    else{
      const newRecipe=new recipes({name,ingredients, instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty, cuisine,caloriesPerServing,image,mealType})
    }
    await newRecipe.save();
    res.status(200).json(newRecipe)
  } catch (error) {
    res.status(401).json(error)
  }
}


// edit recipe in admin panel
exports.updateRecipeController=async(req,res)=>{
  //get recipe id from url
  const {id}=req.params;
  const {name,ingredients, instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty, cuisine,caloriesPerServing,image,mealType}=req.body;
  try {
    
    const updateRecipe=await recipes.findByIdAndUpdate({_id:id},{name,ingredients, instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty, cuisine,caloriesPerServing,image,mealType},{new:true})
    await updateRecipe.save();
    res.status(201).json(updateRecipe)
  } catch (error) {
     res.status(401).json(error)
  }
}

// delete recipe in admin panel
exports.removeRecipeController=async(req,res)=>{
  const {id}=req.params;
  try {
    const removeRecipe=await recipes.findByIdAndDelete({_id:id});
    res.status(200).json(removeRecipe)
  } catch (error) {
    res.status(401).json(error)
  }
}


