//! Routing
const express = require('express');
const router = express.Router();
// const axios = require('axios');

const userController = require('../controllers/userController');

// router.get('/list', (req, res)=>{
//   axios.get('https://jsonplaceholder.typicode.com/users')
//   .then((result)=>{
//       console.log('data:', result.data);
//       res.render('profile', {
//           users: result.data,
//       }); 
//   })
// })
router.get('/profile', userController.getUsers);
router.get('/delete', userController.deleteUsers);
router.get('/addPicture', userController.addPicture);
router.get('/data/:id/test', userController.testRoute);
router.get('/:id', userController.userDetails);

module.exports = router