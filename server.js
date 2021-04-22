//! Declaration
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const indexRouter = require('./routes/indexRouter');
//! Settings
// Static folder setup for css, images, js, bootstrap, lib etc.
app.use(express.static(__dirname+'/public'))
// View: to display/see something
// app.set method saying we have a view engine called hbs
app.set('view engine', 'hbs');


//! Routing
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);




//! listen app with port
app.listen(5000, ()=>{
    console.log('Server is running at localhost:5000')
})



