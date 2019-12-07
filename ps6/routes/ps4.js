const express = require('express');
const router = express.Router();
const weatherConfig = require('../config/weather');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'ps6';

router.post('/get_high', function(req,res,next) {
    const resultTemp = [];
    //
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        //get back the high and lowest temperature that was logged today
        const high = {$query:{},$orderby:{temperature:-1}};
        db.collection("bostonTemps").findOne(high, function (err,res) {
            if (err) throw err;
            console.log("1 document found");
            resultTemp.push(res.temperature);
            resultTemp.push(res.date);
        });
        res.render('highTemp',{ highTemp: resultTemp[0], date: resultTemp[1]});
    });

});

router.get('/', function(req,res,next) {
    res.render('weather');
})

router.get('/get_temp', function(req, res, next) {
    const request = require("request");

    const options = { method: 'GET',
        url: 'http://api.weatherbit.io/v2.0/current',
        qs:
            { key: weatherConfig.API_KEY,
                city: 'boston,ma',
                units: 'i' },
        headers:
            { 'cache-control': 'no-cache',
                Connection: 'keep-alive',
                Host: 'api.weatherbit.io',
                'Postman-Token': '8a43eea5-4d61-400f-a964-dfc3235d37dd,77f78895-e250-45e8-9bbe-2797622f842b',
                'Cache-Control': 'no-cache',
                Accept: '*/*',
                'User-Agent': 'PostmanRuntime/7.19.0',
                Authorization: 'Bearer ' + weatherConfig.API_KEY,
                q: 'boston' }};

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        const time = new Date().toLocaleString();
        const currentTemp = JSON.parse(body).data[0].temp;

        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            const db = client.db(dbName);
            //insert the current temperature into the database
            const obj = {date : time, temperature: currentTemp};
            db.collection("bostonTemps").insertOne(obj, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");
            });
        });
        res.render('currentTemp', {
            boston_temp: currentTemp,
           });
    });
});

module.exports = router;
