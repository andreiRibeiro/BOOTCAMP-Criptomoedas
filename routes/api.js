var express = require('express');
var restify = require('restify-clients');
var router = express.Router();

const apiKey = '1764a834-02a3-42ac-84d2-a0877dc141c4';
const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency';

var client = restify.createJsonClient({
  url: 'https://pro-api.coinmarketcap.com'
});

router.get('/', function(req, res, next) {

  client.get(`/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apiKey}`, function(err, request, response, obj) {
    //console.log(response);
    //console.log("--------------");
    //console.log(obj);
    //console.log("--------------");
    //console.log(JSON.stringify(obj, null, 2));
    res.json(obj);
  });
});

module.exports = router;
