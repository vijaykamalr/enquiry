const express = require('express');
const bodyParser = require('body-parser')
const axios = require('axios');
const cors = require('cors')
const app = express();
const PORT = 3000
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.post('/enquiry', function (req, res, next) {
    var config = {
        "url": "https://api.clickup.com/api/v2/list/199347960/task",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Authorization": "pk_48656698_ZCCW52P6ED81L8S8G5GYFUT6JCL9SQWU",
            "Content-Type": "application/json"
        },
        "data": req.body,
    };
    axios(config)
        .then(function (response) {
            res.status(200).json(response.data)
        })
        .catch(function (error) {
            res.status(500).json({ error: "something went wrong" })
        });

})
app.listen(PORT, function () {
    console.log('listen in PORT - ' + PORT);
})