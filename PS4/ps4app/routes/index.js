const express = require('express');
const router = express.Router();
const weatherConfig = require('../config/weather')


router.get('/',function (req, res, next) {
    const http = require("http");

    const options = {
        "method": "GET",
        "hostname": "api.weatherbit.io",
        "path": [
            "v2.0",
            "current"
        ],
        "headers": {
            "q": "boston",
            "Authorization": "Bearer " + weatherConfig.API_KEY,
            "User-Agent": "PostmanRuntime/7.19.0",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Postman-Token": "b0fd21c7-0fa2-477c-966c-0548c8ed006b,e8fe9306-2915-4bb8-af06-bede1a9b58e3",
            "Host": "api.weatherbit.io",
            "Accept-Encoding": "gzip, deflate",
            "Connection": "keep-alive",
            "cache-control": "no-cache"
        }
    };

    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });

    req.end();

    console.log(req.body);

    res.render('index', {result: req.body});
});



module.exports = router;
