const downloadRecipes=require('../models/downloadModel')

exports.addToDownloadRecipeController=async(req,res)=>{
    const {id}=req.params;
    const userId=req.userId;
    const {name,image,cuisine}=req.body;
    console.log(id,userId,name,image,cuisine)

    try {

        //check whether recipe already exists in download collection
        const existingRecipe=await downloadRecipes.findOne({recipeId:id})
        if(existingRecipe){
            // we only need to update the count by one
            existingRecipe.count+=1
            await existingRecipe.save()
        }
        else{
            // inserrt new document with count =1
            const newRecipe=new downloadRecipes({
                recipeId:id,
                recipeName:name,
                recipeCuisine:cuisine,
                count:1,
                userId:userId,
                recipeImage:image
            })

            await newRecipe.save();
            res.status(201).json(newRecipe)
        }
        
    } catch (error) {
        res.status(401).json(error)
    }
}

// get all download list
exports.getAllDownloadListController=async(req,res)=>{
    try {
        const allDownloads=await downloadRecipes.find();
        res.status(200).json(allDownloads)
    } catch (error) {
        res.status(401).json(error)
    }
}
