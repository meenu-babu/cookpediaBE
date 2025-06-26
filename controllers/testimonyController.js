const testimonials = require('../models/testimonyModel')

//add testimony
exports.addTestimonyController = async (req, res) => {
  console.log('Inside addTestimony Controller')
  const { name, email, message } = req.body
  console.log(name, email, message)
  try {
    const newTestimony = new testimonials({name,email,message})
    await newTestimony.save()
    res.status(201).json(newTestimony)
  } catch (err) {
    res.status(401).json(err)
  }
}

// get all feedbacks
exports.getAllFeedbackController=async(req,res)=>{
  console.log("inside getall feedback controller")
  try {
    const allFeedbakcs=await testimonials.find();
    res.status(200).json(allFeedbakcs)
  } catch (error) {
     res.status(401).json(err)
  }
}


//update status
exports.updateFeedbackStatusController=async(req,res)=>{
  //for updating the status of a feedback we need two inputs
  // 1)status  from FE (approved/rejected)-query param
  // 2)id of the testimonial/feedback-url
  const {id}=req.params;
  const status=req.query.status;
  console.log(id,status)
  try {
    const existingFeedback=await testimonials.findById({_id:id})
    existingFeedback.status=status;
    await existingFeedback.save();
    req.status(201).json(existingFeedback)
  } catch (error) {
    res.status(401).json(err)
  }
}

// get all approved feedbacks
exports.getApprovedFeedbackController=async(req,res)=>{
  try {
    const approvedFeedbacks=await testimonials.find({status:'Approved'});
    res.status(200).json(approvedFeedbacks)
  } catch (error) {
     res.status(401).json(err)
  }
}
