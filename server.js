// Import MongoDB
const mongoose = require('mongoose' )
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 8000

const dbURI = 'mongodb+srv://admin:pepper22@cluster0.esjr1.mongodb.net/fantasy-football-newsletter'
// Connect to DB
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then(function(result) {
    console.log('database is connected')
}) .catch((err) => console.log(err))

//Apply cors policy
app.use(cors())

app.get('/', (req, res) => res.send('Hello'))

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`))