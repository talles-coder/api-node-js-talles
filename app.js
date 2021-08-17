const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
//middleware

app.use(express.json())


// routes
app.get('/', (req ,res) => {
    res.send('Ok')
})

app.get('/hello', (req ,res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT || 3000)
    } catch (error) {
        console.log(error)
    }
}

start()