const nodemailer= require('nodemailer');

const sendEmail = async options =>{
    // 1) Create a transporter
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        }
      });

    // 2) Define the email options
     const mailOptions={
         from: 'Abhishek Pandit <web@vandore.in>',
         to: options.email,
         subject: options.subject,
         text: options.message
     }

    // 3) Actually send the email
   await transport.sendMail(mailOptions)
}
module.exports= sendEmail;