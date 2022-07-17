// Import MongoDB
const mongoose = require('mongoose' )
const dbURI = 'mongodb+srv://admin:pepper22@cluster0.esjr1.mongodb.net/fantasy-football-newsletter'

// Connect to DB
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then(function(result) {
    console.log('database is connected')
}) .catch((err) => console.log(err))