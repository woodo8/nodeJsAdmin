import mongoose from "mongoose";
import TransactionMessage from "../models/transactionModel.js";

export const getTransactions = async (req, res) => {
    try {
        const transactions = await TransactionMessage.find()

        res.status(200).json({ data: transactions })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getTransaction = async (req, res) => {


    try {
        // res.json(req.params)
        const { id: id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id")

        let transaction = await TransactionMessage.findById(id)

        if (transaction) {
            res.status(200).json({ data: transaction })
        } else {
            res.status(404).json("Transaction not found")
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// export const 
// async function getSubscriber(req, res, next) {
//     let subscriber
//     try {
//       subscriber = await Subscriber.findById(req.params.id)
//       if (subscriber == null) {
//         return res.status(404).json({ message: 'Cannot find subscriber' })
//       }
//     } catch (err) {
//       return res.status(500).json({ message: err.message })
//     }

//     res.subscriber = subscriber
//     next()
//   }

export const createTransaction = async (req, res) => {
    const transaction = req.body

    const newTransaction = new TransactionMessage({ ...transaction, debit: transaction.credit * 5 / 100 })
    try {
        await newTransaction.save()
        res.status(201).json({ data: newTransaction })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}