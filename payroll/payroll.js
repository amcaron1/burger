module.exports = function () {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'amcaron1@gmail.com  ',
            pass: 'marcia64'
        }
    });
    
    function payroll() {
        console.log('created');
        transporter.sendMail({
            from: 'amcaron1@gmail.com',
            to: 'amcaron1@msn.com',
            subject: 'hello world from payroll',
            text: 'hello world!'
        });
    }
}

