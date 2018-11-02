var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'amcaron1@gmail.com  ',
        pass: 'marcia64'
    }
});

module.exports = function(app) {
    app.get("/pay", function(req, res) {
        console.log("hello from pay");
        payroll.runPayroll();
        res.end();
    });
}
    
    var payroll = {
        runPayroll: function() {
            console.log('created');
            transporter.sendMail({
                from: 'amcaron1@gmail.com',
                to: 'amcaron1@msn.com',
                subject: 'hello world from payroll',
                text: 'hello world!'
            });
        }
    }
 