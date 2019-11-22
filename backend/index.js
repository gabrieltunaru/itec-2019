const config = require('config')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const usersRoute = require('./routes/users.route')


if(!config.get("privateKey")) {
    console.error("FATAL ERROR: private key not defined")
    process.exit(1)
}

mongoose
    .connect('mongodb://localhost/itec-2019', {useNewUrlParser: true})
    .then(()=> console.log("Connected to MongoDB"))
    .catch(err => console.error('Could not connect to mongo'))

app.use(express.json())
app.use('/user', usersRoute)

app.listen(3000, () => console.log(`Listening on port 3000`))
