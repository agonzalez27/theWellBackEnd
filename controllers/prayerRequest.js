var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

module.exports = {
  sendEmail: sendEmail
}

function sendEmail(req, res) {

  var data = req.body;


  transporter.sendMail({
      from: data.contactEmail,
      to: 'andrew.gonzalez@gmail.com',
      subject: 'Message from ' + data.contactName,
      text: data.contactMsg
  });

  res.json(data);

};
