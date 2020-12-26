const  express = require('express')
const logger = require('morgan');
require('dotenv').config()
const db=require('./db/db')

const shopRouter=require('./routes/Shop.route')
const app = express()
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/shops',shopRouter);




app.listen(7878, () => console.log(`Example app listening on port port!`))