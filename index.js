const express = require("express")

const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()

const connectDb = require("./config/db")
connectDb()
const {errorHandler, notFound} = require("./middleware/errorMiddleware")
const invoiceRoute= require("./routes/invoiceRoute")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/", (req,res) => {
    res.send("homepage")
})
app.use('/api/invoice', invoiceRoute)

const PORT = process.env.PORT || 7000


app.use(notFound)
app.use(errorHandler)



app.listen(PORT, (req, res) => {
    console.log("listening on port " + PORT)
})