const twilio = require('twilio');
const config = require('../configVariables')
const dotenv = require('dotenv');
dotenv.config();

//Log4js
const log4js = require('log4js');
const loggersConfig = require('../logger');
const logger = log4js.getLogger();

const {TWILIO_ID} = process.env;
const {TWILIO_TOKEN} = process.env;
const {TWILIO_PHONE} = process.env;
const {MY_PHONE} = process.env
const phone = MY_PHONE;




class TwilioSender {
    constructor() {
      this.client = twilio(TWILIO_ID, TWILIO_TOKEN);
    }
  
    async sendMessage(username, email) {
        try {
            const message = await this.client.messages.create({
            body: `New order from ${username}, ${email}`,
            from: TWILIO_PHONE,
            to: MY_PHONE
        })
        logger.info(message.sid)
        } catch (error) {
            logger.error(error)
        }
    }
  
}
  
  module.exports = new TwilioSender();