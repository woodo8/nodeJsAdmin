import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from "dotenv"
import  transactionRoutes from "./routes/transactions.js"
const app = express()

dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use("/transactions", transactionRoutes)

app.get("/", (req, res) => {
    res.send("Hello this motherfucker works: Adminka")
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
}))