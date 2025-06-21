const express=require('express')
const recipeController=require('../controllers/recipeController')
const testimonyController=require('../controllers/testimonyController')
const userController=require('../controllers/userController')
const router=new express.Router()

//specify each route/path
router.get('/all-recipes',recipeController.getAllRecipesController)

// add testimony
router.post('/add-testimony',testimonyController.addTestimonyController)

// register user
router.post('/register',userController.addUserController)







module.exports=router;