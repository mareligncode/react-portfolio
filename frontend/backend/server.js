import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import db from './config/db.js'
db()
import userRoute from './routes/user.js'
const app=express()
const PORT = 3000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use('/user',userRoute)
app.listen(PORT, () => {
    console.log(`server ruining on the http://localost:${PORT}`)
})