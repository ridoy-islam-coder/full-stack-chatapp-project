import { RegisteredUser} from "../model/UsersModel.js";
import {TokenEncode} from "../utility/tokenUtility.js";
import SendEmail from "../utility/emailUtility.js";
import { GoogleUser } from "../model/googleloginmodel.js";

export const Registration=async(req,res)=>{

    try {
        let reqBody=req.body;
        await registered.create(reqBody)
        return res.json({status:"success","Message":"User registered successfully"})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }


}




export const Login=async(req,res)=>{
    try {
        let reqBody=req.body;
        let data=await registered.findOne(reqBody)

        if(data==null){
            return res.json({status:"fail","Message":"User not found"})
        }
        else{
            // Login Success
            let token=TokenEncode(data['email'],data['_id'])
            return res.json({status:"success","Message":"User login successfully",data:{token:token}})
        }
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}



export const ProfileDetails=async(req,res)=>{
    try {
        let user_id=req.headers['user_id']
        let data=await registered.findOne({"_id":user_id})
        return res.json({status:"success",message:"User profile successfully",data:data})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}






export const ProfileUpdate=async(req,res)=>{
    try {
        let reqBody=req.body;
        let user_id=req.headers['user_id']
        await registered.updateOne({"_id":user_id},reqBody)
        return res.json({status:"success","Message":"User Update successfully"})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}











export const EmailVerify=async(req,res)=>{
try {
    let email=req.params.email;
    let data=await registered.findOne({email: email})
    if(data==null){
        return res.json({status:"fail","Message":"User email does not exist"})
    }
    else {

        // Send OTP To Email
        let code=Math.floor(100000+Math.random()*900000)
        let EmailTo= data['email'];
        let EmailText= "Your Code is "+ code;
        let EmailSubject= "Task Manager Verification Code"
        await SendEmail(EmailTo, EmailText, EmailSubject)

        // Update OTP In User
        await registered.updateOne({email: email},{otp:code})
        return res.json({status:"success",Message:"Verification successfully,check email"})

    }
}
catch (e){
    return res.json({status:"fail","Message":e.toString()})
}
}

export const CodeVerify=async(req,res)=>{

    try {
        let reqBody=req.body;
        let data=await registered.findOne({email: reqBody['email'],otp:reqBody['otp']})
        if(data==null){
            return res.json({status:"fail","Message":"Wrong Verification Code"})
        }
        else {
            return res.json({status:"success","Message":"Verification successfully"})
        }
    }
    catch (e){
        return res.json({status:"fail","Message":e.toString()})
    }

}

export const ResetPassword=async(req,res)=>{


    try {
        let reqBody=req.body;
        let data=await registered.findOne({email: reqBody['email'],otp:reqBody['otp']})
        if(data==null){
            return res.json({status:"fail","Message":"Wrong Verification Code"})
        }
        else {

           await registered.updateOne({email: reqBody['email']},{
                otp:"0", password:reqBody['password'],
           })
            return res.json({status:"success",Message:"Password Reset successfully"})
        }
    }
    catch (e){
        return res.json({status:"fail","Message":e.toString()})
    }


}






//googleLogin
// export const googleLogin = async (req, res) => {
//     try {
       
//      const exist = await UsersModel.findOne({ sub: req.body.sub });
      
//      if (exist) {
//          res.status(200).json({ Msg: "User already exist" });
//          return;
//      }
  
//         const user = new UsersModel(req.body);
//         await user.save();
       
//         res.status(200).json(user);

//     } catch (error) {
//         res.status(500).json(error.message);
//     }
// };



export const googleLogin = async (req, res) => {
    try {

        const googleData = req.body;

        // STEP 1: Google user exist check
        let googleUser = await GoogleUser.findOne({ sub: googleData.sub });

        if (!googleUser) {
            googleUser = await GoogleUser.create(googleData);
        }

        // STEP 2: Check already registered user
        let registered = await RegisteredUser.findOne({ userId: googleUser._id });

        if (!registered) {
            registered = await RegisteredUser.create({
                userId: googleUser._id,
                name: googleUser.name,
                email: googleUser.email,
                picture: googleUser.picture
            });
        }

        return res.status(200).json({
            message: "Login Successful",
            googleUser,
            registeredUser: registered
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};