const savedRecipes=require('../models/saveRecipeModel')


exports.addToSaveRecipeController=async(req,res)=>{
    const {id}=req.params;
    const userId=req.userId;
    const {name,image}=req.body;
    try {
        const existingRecipe=await savedRecipes.findOne({recipeId:id,userId:userId})
        if(existingRecipe){
            res.status(406).json("Selected recipe already exist in collection !!!")
        }
        else{
            const newRecipe=new savedRecipes({
                recipeId:id,name,image,userId
            })
            await newRecipe.save();
            res.status(201).json(newRecipe)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}


exports.getUserSavedrecipeController=async(req,res)=>{
    const userId=req.userId;
    try {
        const usersavedRecipes=await savedRecipes.find({userId:userId})
        res.status(200).json(usersavedRecipes)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.removeSavedrecipeController=async(req,res)=>{
    // get recipe id
     const {id}=req.params;
     try {
        const removeRecipe=await savedRecipes.findByIdAndDelete({_id:id});
        
     } catch (error) {
         res.status(401).json(error)
     }
}