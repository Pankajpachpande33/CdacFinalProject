import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            default: null
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

export default mongoose.model("Categories", CategorySchema);