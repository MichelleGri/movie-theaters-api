const express = require('express')
const {showsRt, usersRt} = require('./routes')
const app = express()


app.use(express.json())
app.use('/shows', showsRt)
app.use('/users', usersRt)



 


app.listen (3000, () => {
    console.log('The server is running at port 3000')
})

