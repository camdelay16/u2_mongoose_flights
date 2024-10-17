const mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://GAcam90:EJPEEGRG0P3UT3h2@student-cluster.01zfq.mongodb.net/flightsDatabase?retryWrites=true&w=majority&appName=student-cluster')
.then(() =>{
    console.log('Successfully connected to MongoDB')
})
.catch((e) => {
    console.error('Connection error', e.message)
})

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db