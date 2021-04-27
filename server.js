//! Declaration
const express = require('express');
const app = express();
const port=5000;
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const indexRouter = require('./routes/indexRouter');
//! Settings
// Static folder setup for css, images, js, bootstrap, lib etc.
app.use(express.static(__dirname+'/public'))
// View: to display/see something
// app.set method saying we have a view engine called hbs
app.set('view engine', 'hbs');

app.use(express.urlencoded({
    extended: false
}))

//! Routing
app.get('/login', (req, res)=>{
    res.render('login');
 })
 app.post('/login', (req, res)=> {
     console.log(req.body)
     res.json(req.body); // display js object in browser as json data
 })


app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);




//! listen app with port
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})



