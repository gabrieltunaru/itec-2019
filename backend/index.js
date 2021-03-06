const config = require('config')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const usersRoute = require('./routes/users.route')
const cors = require('cors')
const profilesRoute = require('./routes/profile.routes')
const categoryRoutes = require('./routes/category.routes')
const itemRoutes = require('./routes/item.routes')
const generalRoutes = require('./routes/generic.routes')
app.use(cors())

if (!config.get('privateKey')) {
  console.error('FATAL ERROR: private key not defined')
  process.exit(1)
}



mongoose
  .connect('mongodb://localhost/itec-2019', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to mongo'))

app.use(express.json())
app.use('/api/user', usersRoute)
app.use('/api/profile', profilesRoute)
app.use('/api/category', categoryRoutes)
app.use('/api/items', itemRoutes)
app.use('/api/general',generalRoutes)

app.listen(3000, () => console.log(`Listening on port 3000`))
