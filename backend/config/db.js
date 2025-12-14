import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
const db = async (req, res) => {
    mongoose.connect(process.env.MONGO_URL)
    console.log('database connected successfully')
}
export default db