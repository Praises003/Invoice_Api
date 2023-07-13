const mongoose = require("mongoose")

const invoiceSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please Input The Name"]
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    invoiceNum: {
        type: String
    },
    karadName : {
        type: String,
        default:"Karad INTEGRATED SYSTEMS LTD"
    },
    karadAddress: {
        type: String,
        default: "21, Oba Babington Ashaye Crescent Omole Phase 1 Ikeja, Lagos Nigeria"
    },
    karadPhone: {
        type: Number,
        default: +2348026821769
    },
    karadImg: {
        type: String,
        default: "data:image/jpeg;base64,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"
    },
    Date: {
        type: Date,
        default: Date.now
    }


}, {
    timestamps: true
})

const Invoice = mongoose.model("TestInvoices", invoiceSchema)

module.exports = Invoice