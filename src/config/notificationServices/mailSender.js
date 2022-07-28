const nodemailer = require("nodemailer");
const {createTransport} = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const config = require('../configVariables');

const {GMAIL_ADDRESS} = process.env;
const {GMAIL_PWD} = process.env;

//Log4js
const log4js = require('log4js');
const loggersConfig = require('../logger');
const logger = log4js.getLogger();

class NodeMailSender {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: GMAIL_ADDRESS,
        pass: GMAIL_PWD
      }
    });
  }

  async send(template, email, name) {
    const mailOptions = {
      from: "<no-reply@allthingsjapan.com>",
      to: email, 
      subject: `New order from ${name}, ${email}`, 
      text: "Order Successfully created", 
      html: template
    };
    try {
      const response = await this.transporter.sendMail(mailOptions);
      logger.info("The email was sent and the id is:" + response.messageId);
    } catch (error) {
      logger.error(error)
    }
    
  }

  async aNewUserMail(template) {
    const mailOptions = {
      to: 'trad.ljgarcia@gmail.com', 
      subject: `New user registered`,
      text: `A new user was successfully registered`,
      html: template 
    };
    try {
      const response = await this.transporter.sendMail(mailOptions);
      logger.info(response.envelope);
    } catch (error) {
      logger.error(error)
    }

  }
}

module.exports = new NodeMailSender();