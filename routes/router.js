const express=require('express')
const recipeController=require('../controllers/recipeController')
const testimonyController=require('../controllers/testimonyController')
const userController=require('../controllers/userController')
const jwtMiddlewatr=require('../middlewares/jwtMiddleWare')
const jwtMiddleware = require('../middlewares/jwtMiddleWare')
const downloadRecipeController=require('../controllers/downloadRecipeController')
const saveRecipeController=require('../controllers/saveRecipeController')
const router=new express.Router()

//specify each route/path
router.get('/all-recipes',recipeController.getAllRecipesController)

// add testimony
router.post('/add-testimony',testimonyController.addTestimonyController)

// register user
router.post('/register',userController.addUserController)

// login user
router.post('/login',userController.loginUserController)

//get recipe
router.get('/recipe/:id/view',recipeController.getRecipeController)

//get related recipe
router.get('/related-recipe',jwtMiddleware,recipeController.relatedRecipeController)

// download recipe
router.post('/recipe/:id/download',jwtMiddleware,downloadRecipeController.addToDownloadRecipeController)

//saved Recipe collection
router.post('/recipe/:id/save',jwtMiddleware,saveRecipeController.addToSaveRecipeController)

// get user saved recipe
router.get('/get-saved-recipes',jwtMiddleware,saveRecipeController.getUserSavedrecipeController)

// delete saved recipe
router.delete('/recipe/:id/remove',jwtMiddleware,saveRecipeController.removeSavedrecipeController)

//upload profile pic
router.post('/user/edit',jwtMiddleware,userController.editUserController)

// get all users
router.get('/all-users',jwtMiddleware,userController.getAllUsersController)

//get all download list
router.get('/all-downloads',jwtMiddleware,downloadRecipeController.getAllDownloadListController)

//get all feedbacks
router.get('/all-feedbacks',jwtMiddleware,testimonyController.getAllFeedbackController)


//update feedback status
router.get('/feedback/:id/update',jwtMiddleware,testimonyController.updateFeedbackStatusController)

//get all approved feedbacks
router.get('/all-approved-feedback',testimonyController.getApprovedFeedbackController)
module.exports=router;