const mongoose = require('mongoose');
const MongoStore = require ('connect-mongo');
const dotenv = require('dotenv');
dotenv.config();
const config = require('./configVariables')

//Log4js
const log4js = require('log4js');
const loggersConfig = require('./logger');
const logger = log4js.getLogger();

const {MONGO_DBNAME} = process.env;
const {MONGO_PASSWORD} = process.env;
const {MONGO_USER} = process.env;
const {SESSION_SECRET} = process.env;


const ConfigMongo = {
    name : MONGO_DBNAME,
    collection: MONGO_DBNAME,
    host: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@codercluster.mmv7k.mongodb.net/${MONGO_DBNAME}db?retryWrites=true&w=majority`
}

exports.sessionOption = {
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

class MyMongoClient {
    constructor() {
        (this.connected = false), (this.client = mongoose);
    }

    async connect(){
        try {
            await this.client.connect(ConfigMongo.host);
            logger.info("DataBase connected");
        } catch (error) {
            logger.error("Cannot Connect") ;
        }
    }

    async disconnect() {
        try {
            await this.client.close();
        } catch (error) {
            logger.error("Cannot Diconnect")
        }
    }
}

module.exports = MyMongoClient