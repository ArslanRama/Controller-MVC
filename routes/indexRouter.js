const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('home', {
        pageTitle: 'Home Page',
        websiteName: 'arif.com',
        students_num: 17,
        company_data: { // nested object
            name: 'DCI',
            type: 'Education',
            address: {
                street: 'Berlineer Alee 100',
                city: 'Düsseldorf'
            }
        },
        foods: ['routerle', 'orange', 'Grapes', 'jackfruit', 'melon'], // array of strings
        users: [ // array of objects
            {
                id: 1,
                name: 'Hiba'
            },
            {
                id: 2,
                name: 'Jose'
            },
            {
                id: 3,
                name: 'Syed'
            }
        ]
    }); 
})

router.get('/contact', (req, res)=>{
    res.render('contact', {pageTitle: 'Contact Page'});
})

// receive some data from form/user
router.post('/formdata', (req, res)=> {
    // data we received
    // req.body
    console.log('Data from user:', req.body)
    // put data in a variable
    //const {email, username, message} = req.body;
    // send/render/redirect this data to profile page
    //res.render('profile', {user: req.body})
    res.render('contact', {
        pageTitle: 'Contact Page',
        user: req.body
    })
})

router.get('/gallery', (req, res)=>{
    res.render('gallery');
    //res.sendFile(__dirname+'/html/gallery.html')
})

module.exports = router;