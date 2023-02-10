const express=require('express');
const { authUser, allUsers, registerUser } = require('../controllers/userControllers');
const { protect } =require("../middleware/authMiddleware")


const router=express.Router();
router.post('/',registerUser)
router.route("/").get(protect, allUsers);
router.post('/login',authUser)

module.exports=router;