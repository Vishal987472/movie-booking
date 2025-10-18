import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth.js'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}))

app.use('/api/auth', authRoutes)

app.get('/', (req, res) => res.send('JWT Cookie Auth Backend'))

const PORT = process.env.PORT || 4000

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => console.log(`Server running on ${PORT}`))
  })
  .catch(err => {
    console.error('MongoDB connection error:', err)
  })
