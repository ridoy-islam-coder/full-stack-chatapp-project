import express from "express";
const router = express.Router();


import * as UsersController from "../app/controllers/UsersController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import { getconversation } from "../app/controllers/conversationController.js";




// Users
router.post("/Registration", UsersController.Registration)
router.post("/Login", UsersController.Login)
router.get("/ProfileDetails",UsersController.ProfileDetails)
router.post("/ProfileUpdate",AuthMiddleware, UsersController.ProfileUpdate)
router.get("/EmailVerify/:email", UsersController.EmailVerify)
router.post("/CodeVerify", UsersController.CodeVerify)
router.post("/ResetPassword", UsersController.ResetPassword)


//google-login

router.post("/google-login", UsersController.googleLogin)



// massging
router.post("/conversation/add",UsersController.newconversation)

// massging
router.post("/conversation/get",getconversation)




export default router;


