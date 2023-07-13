const mongoose = require('mongoose')

const db = async() => {
    try {
        const mongPass = "mongodb+srv://Invoice:PraisesKaradng03@cluster0.z5wotbn.mongodb.net/?retryWrites=true&w=majority"
        const con = await mongoose.connect(process.env.MONGO_URI || mongPass)
        console.log(`connected: ${con.connection.host}`)
 
    } catch(err) {
        console.error(`Error: ${err.message}`)
        process.exit(1)
    } 
    
}

module.exports = db