const nodemailer=require('nodemailer');

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: "emailkaaga ku qor", pass: "password generator ku qor" },
});
var mailOptions = {
  from: "diraha",
  to: "loo diraha",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};


transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
