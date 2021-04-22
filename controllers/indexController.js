
exports.index = (req, res) => {
    // rendering: display template engine files
    //? we name the page with "pageTitle" from layout title. 
    res.render('home', {
        websiteData: 'http',
        pageTitle: 'Home Page',
        websiteName: 'aslan.com',
        studentsNum: 17,
        companyData: {
            name: 'DCI',
            type: 'Education',
            address: {
                street: 'Duerrenberger Str.5',
                city: 'Durren'
            },
            service: ['HTML5', 'CSS3', 'JS', 'ReactJS', 'NodeJS'],
            users: [
                {
                    id: 1, name: 'Roger'
                },
                {
                    id: 2, name: 'Novak'
                },
                {
                    id: 3, name: 'Nadal'
                },
                {
                    id: 4, name: 'Thiem'
                },
            ]
        }
    });
}

// contact
exports.contact = (req, res) => {
    res.render('contact', { pageTitle: 'Contact Page' });
    //res.sendFile(__dirname+'/html/contact.html')
}

// gallery
exports.gallery = (req, res) => {
    res.render('gallery');
    //res.sendFile(__dirname+'/html/gallery.html')
}