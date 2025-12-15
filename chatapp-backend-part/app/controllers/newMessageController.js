import { conversationModel } from "../model/conversationModel.js";
import { MessageModel } from "../model/MessageModel.js";




export const newMessage = async (req,res) => {
  try{
    const newMessage=new MessageModel(req.body);
    await newMessage.save();

    await conversationModel.findByIdAndUpdate(req.body.conversationID,{message:req.body.text})
    return res.status(200).json("message has been sent successfully")
   }catch(error){
    return res.status(500).json(error.message)
   }

}



export const getMessage = async (req,res) => {
  try{
    const messages=await MessageModel.find({conversationID:req.params.id});
  
    return res.status(200).json(messages)

  }catch(error){
    return res.status(500).json(error.message)
  }

}



const url=" http://localhost:5050/api"

export const  uplodeFile= async (req,res)=>{
 try{

 if(!req.file){
     return res.status(404).json('file not foud')
  }
 const imageUrl = `${url}/file/${req.file.filename}`
 return res.status(200).json(imageUrl)
   

  }catch(error){
    return res.status(500).json(error.message)
  }


}