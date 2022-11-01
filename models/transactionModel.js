import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    credit: {
        type: Number,
        required: true
    },
    debit: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        default: "Active"
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const TransactionMessage = mongoose.model("TransactionMessage", transactionSchema)

export default TransactionMessage