const nodemailer = require("nodemailer");
require('module-alias/register');
const emailConfig = require('@config/smtp.js')


function sendEmailForgot() {
  const transporter = nodemailer.createTransport({
  host: emailConfig.host,
  port: emailConfig.port,
  secure: emailConfig.secure,
  auth: {
    user: emailConfig.auth.user,
    pass: emailConfig.auth.pass
  }
  });

  const mailOptions = {
    from: emailConfig.auth.user,
    to: "daniel.dias.scarlatta@gmail.com",
    subject: "Hello ✔",
    text: "testando envio de email"
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      console.log(err)
    } else {
      console.log("Email send: " + info.response)
    }
  })

  // async function main() {
  //   const info = await transporter.sendMail({
  //     from: emailConfig.auth.user, // sender address
  //     to: "daniel.dias.scarlatta@gmail.com", // list of receivers
  //     subject: "Hello ✔", // Subject line
  //     text: "Hello world?", // plain text body
  //     html: "<b>Hello world?</b>", // html body
  //   });

  //   console.log(info);
  // }
  // main().catch(console.error);
}

module.exports = sendEmailForgot;