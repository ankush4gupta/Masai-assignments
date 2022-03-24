const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "e267c868d51cbe", // generated ethereal user
    pass: "6ad4ec44477af5", // generated ethereal password
  },
});
