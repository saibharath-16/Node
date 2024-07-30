const express = require('express');
const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const adminAccess = (req, res, next) => {
    const isAdmin = true; 
    if (isAdmin) {
        next();
    } else {
        res.status(403).send('Forbidden');
    }
};
app.use(logger);
app.use(adminAccess)
// app.use('/admin', adminAccess); 

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/admin/dashboard', (req, res) => {
    res.send('Admin Dashboard');
});

app.get('/admin/settings', (req, res) => {
    res.send('Admin Settings');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
