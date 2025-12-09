import mongoose from "mongoose";

const GoogleUserSchema = new mongoose.Schema(
    {
        iss: String,
        nbf: String,
        aud: String,
        sub: { type: String, required: true, unique: true },  // Google Unique ID
        email: { type: String, required: true },
        email_verified: Boolean,
        azp: String,
        name: { type: String, required: true },
        picture: { type: String, required: true },
        given_name: String,
        family_name: String,
        iat: Number,
        exp: Number,
        jti: String
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const GoogleUser = mongoose.model("google_users", GoogleUserSchema);