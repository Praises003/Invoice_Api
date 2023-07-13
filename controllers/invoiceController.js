const Invoice = require("../models/invoiceModel.js")

const asyncHandler = require("express-async-handler")

const getAllInvoice = asyncHandler(async(req, res) => {
    try {
        const getAll = await Invoice.find()
        res.status(200).json({
            result: getAll.length,
            getAll 
        })
    } catch(err) {
        res.status(400)
        throw new Error(err.message)
    }
     
})

const getSingleInvoice = asyncHandler(async(req, res) => {
    const {id} = req.params
    try {
        const singleInvoice = await Invoice.find({_id: id})
        res.status(200).json({singleInvoice}) 

    } catch(err) {
        res.status(400)
        throw new Error(err.message)
    }
   
})

const createInvoice = asyncHandler(async(req, res) => {
    try {
        const {name, address, phone, email, invoiceNum} = req.body
        let createInv = { name,
            address,
            phone,
            email,
            invoiceNum
    }
        const newInvoice = await Invoice.create(createInv)
        res.status(200).json({
            newInvoice
        })
        
    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
   
})
module.exports = {getAllInvoice, getSingleInvoice, createInvoice}