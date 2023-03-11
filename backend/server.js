const express = require('express')
const cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware') 

const connectDB = require('./config/db');
const port = process.env.port || 8080

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/admin', require('./routes/superAdmin'))
app.use('/api/appointment', require('./routes/appointmentRoutes'))
app.use('/api/patient', require('./routes/patientRecordRoutes'))


app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));