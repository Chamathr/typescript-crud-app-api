import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now()
        },
        isDelete: {
            type: Boolean,
            required: true,
            default: false
        }
    }
)

const Auth = mongoose.model('auth', AuthSchema);
export { Auth };