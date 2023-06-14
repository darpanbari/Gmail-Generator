const nodemailer = require ('nodemailer');

const sendEmail = () => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "darpanbari05@gmail.com",
      pass: "hdqzfbyscgarokm",
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'chiragprajapati781@gmail.com',
    subject: 'Automated Email!',
    text: 'This email was generated using Node.js and Nodemailer with Gmail!',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports.hello = (event, context, callback) => {
  console.log("Hello Email");
  
  sendEmail();
  
  callback(null);
};