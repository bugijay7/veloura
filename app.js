import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/connectDB.js"


import contactRoutes from "./routes/contactRoute.js"



dotenv.config()

const app = express()   

app.use(cors())
app.use(express.json()) 

app.use('/api/contact', contactRoutes)

const PORT = process.env.PORT || 5000

connectDB() 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
} )      
 