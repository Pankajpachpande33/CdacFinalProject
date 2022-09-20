import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            default: null
        },
        price: {
            type: Number,
            require: true
        },
        categoryid: {
            type: mongoose.Types.ObjectId,
            require: true
        },
        isdeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Products", ProductSchema);