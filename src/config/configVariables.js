const dotenv = require('dotenv');
dotenv.config();

PORT : process.env.PORT;
SESSION_SECRET : process.env.SESSION_SECRET;
MONGO_USER : process.env.MONGO_USER;
MONGO_PASSWORD : process.env.MONGO_PASSWORD;
MONGO_DBNAME: process.env.MONGO_DBNAME;
GMAIL_ADDRESS: process.env.GMAIL_ADDRESS;
GMAIL_PWD : process.env.GMAIL_PWD;
TWILIO_ID : process.env.TWILIO_ID;
TWILIO_TOKEN : process.env.TWILIO_TOKEN;
TWILIO_PHONE : process.env.TWILIO_PHONE;
MY_PHONE : process.env.MY_PHONE;
TWILIO_FAILSAFE : process.env.TWILIO_FAILSAFE;
JWT_SECRET :process.env.JWT_SECRET;
