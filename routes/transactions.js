import express from "express"
import { createTransaction, getTransaction, getTransactions } from "../controllers/transactions.js"

const router = express.Router()

router.get("/", getTransactions)
router.get("/:id", getTransaction)
router.post("/post", createTransaction)

export default router