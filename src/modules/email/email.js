const nodemailer = require("nodemailer");
require('module-alias/register');

const emailConfig = require('@config/smtp.js')

console.log({
  host: emailConfig.host,
  port: emailConfig.port,
  secure: emailConfig.secure,
  user: emailConfig.auth.user,
  pass: emailConfig.auth.pass
})

// const transporter = nodemailer.createTransport({
//   host: emailConfig.host,
//   port: emailConfig.port,
//   secure: emailConfig.secure,
//   auth: {
//     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//     user: emailConfig.auth.user,
//     pass: emailConfig.auth.pass
//   }
// });

// async function main() {
//   const info = await transporter.sendMail({
//     from: 'daniel.dias.scarlatta2@gmail.com', // sender address
//     to: "daniel.dias.scarlatta@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log(info);
// }

// main().catch(console.error);