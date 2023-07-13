const express = require("express")
const { getAllInvoice, getSingleInvoice, createInvoice } = require("../controllers/invoiceController")

const router = express.Router()

router.route("/").get(getAllInvoice).post(createInvoice)

router.get("/:id",getSingleInvoice)

module.exports = router