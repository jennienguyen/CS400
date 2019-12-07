const express = require('express');
const router = express.Router();
const weatherConfig = require('../config/weather');
const app = express();
const db = require('../mongo/mongo');
const assert = require('assert');

db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});

router.get('/', function(req,res,next) {
    res.render('weather');
});

router.get('/get_high', function (req,res,next) {
    let mongo = db.getDB();
    mongo.collection("bostonTemps").findOne({$query:{},$orderby:{temperature:-1}}, function (err, docs) {
        res.render('highTemp', {highTemp: docs.temperature, date: docs.date});
    });
});

router.get('/get_temp', function(req,res,next) {
    const request = require("request");

    let mongo = db.getDB();

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
        const obj = {date : time, temperature: currentTemp};
        mongo.collection("bostonTemps").insertOne(obj,function (err,r) {
        });
        res.render('currentTemp', {boston_temp: currentTemp});
    });
});



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
