import { getIO } from "../../sokit/socket.js";
import { conversationModel } from "../model/conversationModel.js";
import { MessageModel } from "../model/MessageModel.js";
import grid from 'gridfs-stream';
import mongoose from 'mongoose';


// export const newMessage = async (req,res) => {
//   try{
//     const newMessage=new MessageModel(req.body);
//     await newMessage.save();

//     await conversationModel.findByIdAndUpdate(req.body.conversationID,{message:req.body.text})
//      // 🔹 socket notify
//     const io = getIO();
//     io.emit("getMessage", message);


//     return res.status(200).json("message has been sent successfully")
//    }catch(error){
//     return res.status(500).json(error.message)
//    }

// }




export const newMessage = async (req, res) => {
  try {
    // ❗ declare message variable
    const message = {
      senderId: req.body.senderId,
      receiverId: req.body.receiverId,
      conversationID: req.body.conversationID,
      text: req.body.text,
      type: req.body.type
    };

    const newMessageData = new MessageModel(message);
    await newMessageData.save();

    await conversationModel.findByIdAndUpdate(
      req.body.conversationID,
      { message: req.body.text }
    );

    return res.status(200).json("Message has been sent successfully");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};













export const getMessage = async (req,res) => {
  try{
    const messages=await MessageModel.find({conversationID:req.params.id});
  
    return res.status(200).json(messages)

  }catch(error){
    return res.status(500).json(error.message)
  }

}



const url=" http://localhost:5050/api"





let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});


export const uploadImage = (request, response) => {
    if(!request.file) 
        return response.status(404).json("File not found");
    
    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl);    
}

export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        // const readStream = gfs.createReadStream(file.filename);
        // readStream.pipe(response);
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}