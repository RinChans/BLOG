const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const passport = require('passport');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');


const app = express();

// Require configuration

const {
    mongooose_URL,
    PORT
} = require('./Config/configuration');

mongoose.connect(mongooose_URL)
    .then(response => {
        console.log('MongoDB connected successfuly')
    })
    .catch(err => {
        console.log('MongoDB connected Faild');
    })

// Setting Express
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));


// USE REQUIRE

app.use(methodOverride('newMethod'));


// Require Router
const DefaultRouter = require('./Routers/DefaultRouter');
const AdminRouter = require('./Routers/AdminRouter');

app.use('/',DefaultRouter);
app.use('/',AdminRouter);

app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
})
