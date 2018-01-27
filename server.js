const express = require('express');
const mongoose = require('mongoose');
const admin = require('./routes/admin');
const path = require('path');
const app = express();
const config = require('./config/config');
const bodyParser = require('body-parser');
const cors = require('cors');
mongoose.Promise = global.Promise;

mongoose.connect(config.database, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected')
    }
})
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//admin route
app.use('/admin', admin);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/dist/index.html'));
// })

app.listen(3000, (err) => {
    if (err) console.log("err");

    console.log("port started");
})