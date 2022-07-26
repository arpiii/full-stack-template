const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient // The .MongoClient allows us to use the methods associated with mongoclient
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING, // Recommend this to be const instead so we get runtime errors if it's ever reassigned
    dbName = 'star-trek-api',
    collection


MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to database')
        db = client.db(dbName)
        collection = db.collection('alien-info')
    })

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server is running on port = ${process.env.PORT}`)
})
