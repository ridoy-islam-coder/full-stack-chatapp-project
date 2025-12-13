
import mongoose from "mongoose";

const conversationUserSchema = new mongoose.Schema(
    {
  members: {
        type: Array
       },
    message: {
        type: String
    }
     
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const conversationModel = mongoose.model("conversationModel", conversationUserSchema);
