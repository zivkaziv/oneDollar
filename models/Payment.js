/**
 * Created by ziv on 05/02/2017.
 */
var mongoose = require('mongoose');

var schemaOptions = {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
};

var PaymentsSchema = new mongoose.Schema({
    paymentToken: String,
    payerID: String,
    paymentID: String,
    returnUrl: String,
    instant: String,
}, schemaOptions);

var Payment = mongoose.model('Payments', PaymentsSchema);

module.exports = Payment;
