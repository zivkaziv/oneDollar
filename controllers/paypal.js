
/**
 * GET /contact
 */
exports.paypalWebhookPost = function(req, res) {
    console.log(req.body);
    console.log('The id is : ' + req.body.id);
};
