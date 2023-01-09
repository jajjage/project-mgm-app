const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const colors = require('colors')
require('dotenv').config();
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()

// Enable CORS
app.use(cors())

//connect to database
connectDB()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port ${port}`))