import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        orderno: {
            type: String,
            require: true,
        },
        orderdetail: {
            type: ["MIXED"],
            default: null
        },
        totalamount: {
            type: Number,
            require: true
        },
        iscancelled: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Orders", OrderSchema);