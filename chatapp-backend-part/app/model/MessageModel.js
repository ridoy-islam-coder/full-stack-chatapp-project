
import mongoose from "mongoose";

const conversationUserSchema = new mongoose.Schema(
    {
 conversationID:{
    type: String
},
    receiverID: {
        type: String
    },
     senderID:{
    type: String
},
    text: {
        type: String
    },
      text: {
        type: String
    },
     location: {
    lat: { type: Number },
    lng: { type: Number }
  }
     
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const MessageModel = mongoose.model("messagemodel", conversationUserSchema);
