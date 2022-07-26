const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient // The .MongoClient allows us to use the methods associated with mongoclient
require('dotenv').config()