/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// var request = require('request');
module.exports = {
    index: function(req, res) {
        try {
            var amount = "1"
            var from = "PKR";
            var to = "USD"
            sails.request.get({
                url: 'https://www.google.com/finance/converter?a=' + amount + '&from=' + from + '&to=' + to + '',
            }, function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('upload failed:', err);
                    return res.json({
                        status: 'failure',
                        message: err
                    });
                } else {
                    var a = body.substring(body.indexOf("bld") + 1);
                    var b = a.substring(0, a.indexOf(to)).replace("id>", "");
                    var c = b.replace("ld>", "");
                    console.log(c);
                    return res.json({
                        status: 'success'
                        amount: amount,
                        from: from,
                        to: to,
                        conversion: c
                    });
                }
            });
        } catch (e) {
            return res.json({
                status: 'failure',
                message: e
            });
        }
    }
};
