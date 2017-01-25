
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

module.exports = {
  sendEmail: sendEmail
}

function sendEmail(req, res) {

  var data = req.body;
  var email = 'andrew.gonzalez@gmail.com, jdbrvhrt@gmail.com,'

  transporter.sendMail({
      from: data.contactEmail,
      to: email, 
      subject: 'Message from ' + data.contactName,
      text: data.contactMsg
  });

  res.json(data);

};
