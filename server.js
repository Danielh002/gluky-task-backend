const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./api/routes');
const app = express();
const port = process.env.PORT || 3000;


const mongooseUri = 'mongodb+srv://' + process.env.MONGO_ATLAS_USER + ':' + process.env.MONGO_ATLAS_PW + '@cluster0.wxhuw.mongodb.net/<dbname>?retryWrites=true&w=majority';
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS, PATCH');
    next();
});

routes(app);
app.listen(port, function () {
    console.log('Server started on port: ' + port);
});

console.log("process.env.NODE_ENV", process.env.NODE_ENV)
if (process.env.NODE_ENV == 'test') {
    const Mockgoose = require('mockgoose').Mockgoose;
    const mockgoose = new Mockgoose(mongoose);
    mockgoose.prepareStorage()
        .then(() => {
            mongoose.connect('TEST', connectionParams)
            .then(() => {
                console.log('Connected to Mock database ')
            })
            .catch((err) => {
                console.error(`Error connecting to the Mock database. \n${err}`);
            })
        })
}
else {
    mongoose.connect(mongooseUri, connectionParams)
        .then(() => {
            console.log('Connected to database ')
        })
        .catch((err) => {
            console.error(`Error connecting to the database. \n${err}`);
        })
}

module.exports = app