
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
    }
     
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const MessageModel = mongoose.model("messagemodel", conversationUserSchema);
