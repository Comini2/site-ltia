let nodemailer = require('nodemailer');
let aws = require('aws-sdk');

aws.config.update({region: 'us-west-2'});

// create Nodemailer SES transporter
let transporter = nodemailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01'
    })
});

// send some mail
transporter.sendMail({
    from: 'joaocomini@gmail.com',
    to: 'joaocomini@gmail.com',
    subject: 'Message',
    text: 'I hope this message gets sent!'},
    (err, info) => {
    console.log(err);
});