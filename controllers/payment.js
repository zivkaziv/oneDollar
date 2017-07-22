
var Payment = require('../models/Payment');
/**
 * GET /contact
 */
exports.paidPost = function(req, res) {
    let paypalData = req.body.paypal;
    console.log(paypalData);
    let paymentToSave = new Payment({
        paymentToken:paypalData.paymentToken,
        payerID:paypalData.payerID,
        paymentID:paypalData.paymentID,
        intent:paypalData.intent,
        returnUrl:paypalData.returnUrl
    });
    paymentToSave.save();
    Payment.count({},function(err,count){
        if(err) console.log(err);
        console.log('Tha last number of counts is ' + count);
        res.send({paid:count});
    });
};
