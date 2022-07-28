const MongoStore = require ('connect-mongo');
const dotenv = require('dotenv');
dotenv.config();
const config = require('./configVariables');

const {MONGO_DBNAME} = process.env;
const {MONGO_PASSWORD} = process.env;
const {MONGO_USER} = process.env;
const {SESSION_SECRET} = process.env;


const sessionOption = {
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@codercluster.mmv7k.mongodb.net/${MONGO_DBNAME}db?retryWrites=true&w=majority`,
        ttl: 10 * 60
    }),
    secret:SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 10 * 60 * 1000
    }
} 

module.exports = sessionOption