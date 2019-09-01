const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const config = require('config')
const db = config.get('mongoURI')
const path = require('path')
// const users = require('./routes/users')
const app = express();
const PORT = process.env.PORT || 5000
//passport middleware
app.use(passport.initialize())

//Passport Config
require('./config/passport')(passport)

app.use(express.json())
app.use('/api/responses', require('./routes/response'))
app.use('/api/questions', require('./routes/questions'))
app.use('/api/users', require('./routes/users'))
app.use('/api/profile', require('./routes/profile'))


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get(*, (req, res) =>{
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html' ))
    } )
}

app.listen(PORT, () => console.log(`server running on ${PORT}`))


mongoose.connect(db, {useNewUrlParser: true}).then(() => console.log('connected to MongoDB'))
