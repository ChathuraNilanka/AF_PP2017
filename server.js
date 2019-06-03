const bodyParser = require('body-parser');
const express = require('express');
const mongoDB = require('mongoose');
const parcelBundler = require('parcel-bundler');

const app = express();

const PORT = 3000;

const bundler = new parcelBundler('./public/index.html');

const routes = require('./node/routes/api-routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoDB.connect('mongodb+srv://af:af@af-final-tmxwk.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}).then(()=>{
        console.log("Connected to Mongo");
    }).catch(e =>{
        console.log("Error", e);
        process.exit(-1);
    });

app.use('/af', routes);
app.use(bundler.middleware());
app.use(express.static('./dist'));

app.get('/', (req, res)=>{
    res.sendFile('./dist/index.html');
});

app.listen(PORT, (e)=>{
    if(e){
        console.log(e);
        process.exit(-1);
    }
    console.log("Server listen to 3000");
});

