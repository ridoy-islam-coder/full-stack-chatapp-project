// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema(
//     {
//         iss:{type:String},
//         nbf:{type:String},
//         aud:{type:String},
//         sub:{type:String},
//         email:{type:String,unique:true,required:true},
//         email_verified:{type:Boolean},
//         azp:{type:String},
//         name:{type:String,required:true},
//         picture:{type:String,required:true},
//         given_name:{type:String},
//         family_name:{type:String},
//         iat:{type:Number},
//         exp:{type:Number},
//         jti:{type:String}
//     },
//     {
//         timestamps: true,
//         versionKey:false
//     }
// )

// export const UsersModel = mongoose.model("users", UserSchema);


import mongoose from "mongoose";

const RegisteredUserSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "google_users", required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        picture: { type: String },

        role: { type: String, default: "user" },
        status: { type: String, default: "active" }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const RegisteredUser = mongoose.model("registered_users", RegisteredUserSchema);