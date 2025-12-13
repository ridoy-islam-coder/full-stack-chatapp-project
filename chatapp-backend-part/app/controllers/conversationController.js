import { conversationModel } from "../model/conversationModel.js";





export const getconversation =async (req,res)=>{
    try{
        const { senderID, receiverID } = req.body;
        const conversation = await conversationModel.findOne({members:{$all:[receiverID, senderID]}})
        return res.status(200).json({message: 'conversation get successfully', conversation})
    }catch(error){
        return res.status(500).json(error.message);
    }
}