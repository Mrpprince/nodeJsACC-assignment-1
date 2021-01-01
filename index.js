const  express = require('express')
const logger = require('morgan');
require('dotenv').config()
const db=require('./db/db')

const shopRouter=require('./routes/Shop.route')
const app = express()
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false ,useUnifiedTopology: true}));

const port = 5000;

app.use('/shops',shopRouter);




app.listen(process.env.PORT || port)