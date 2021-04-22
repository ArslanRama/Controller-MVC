const axios = require('axios');

// Get all users from API
exports.getUsers = (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((result) => {
            console.log('data:', result.data);
            res.render('profile', {
                users: result.data,
            });
        })
}

// Delete user from API
exports.deleteUsers = (req, res) => {
    res.send('user removed...')
}
// add picture
exports.addPicture =  (req, res) => {
    res.send('user picture...')
}

// test route
exports.testRoute = (req, res) => {
    res.send('Test /user/data/anyid/test')
}

// user details
exports.userDetails =  (req, res) => {
    res.send('user details...')
}