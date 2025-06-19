const express=require('express')
const recipeController=require('../controllers/recipeController')
const router=new express.Router()

//specify each route/path
router.get('/all-recipes',recipeController.getAllRecipesController)







module.exports=router;