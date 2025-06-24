import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/connectDB.js';
import userRoutes from './Routes/userRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express()
await connectDB()

// Initialise Middle Wares
app.use(express.json())
app.use(cors())
app.use('/api/user',userRoutes)

// API Routing
app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(PORT,()=>{console.log("APP Running on Sever",PORT)})