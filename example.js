var Poloniex = require('./lib/poloniex');

// Either pass your API key and secret as the first and second parameters to examples.js. eg
// node examples.js your-api-key your-api-secret
//
// Or enter them below.
// WARNING never commit your API keys into a public repository.
var key = process.argv[2] || 'your-api-key';
var secret = process.argv[3] || 'your-api-secret';

var client = new Poloniex(key, secret);

// * IMPORTANT *
// The line below is temporary, to avoid API server certficiate failure `Error: CERT_UNTRUSTED`
// This is presumably a temporary issue and has been reported to Poloniex.
// Do not include the line below once the issue is resolved.
Poloniex.STRICT_SSL = false;

// Public call
// client.getTicker(function(err, data){
//     if (err){
//         console.log('ERROR', err);
//         return;
//     }
//
//     console.log(data);
// });
//
// client.getOrderBook('USDT', 'ETH', function(err, data){
//     if (err){
//         console.log('ERROR', err);
//         return;
//     }
//
//     console.log(data);
// });
//
// // Private call - requires API key and secret
// client.buy('VTC', 'BTC', 0.1, 100, function(err, data){
//     if (err){
//         console.log('ERROR', err);
//         return;
//     }
//
//     console.log(data);
// });
//
// client.myBalances(function(err, data){
//     if (err){
//         console.log('ERROR', err);
//         return;
//     }
//
//     console.log(data);
// });
//
// client.returnCompleteBalances(function(err, data){
//     if (err){
//         console.log('ERROR', err);
//         return;
//     }
//
//     console.log(data);
// });
