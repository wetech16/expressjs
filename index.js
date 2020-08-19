const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const members = require('./Members');

//Express middleware: whenever receives a request, we gain access for res, req
//put middleware function before a request send
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
app.use(logger);

//localhost:5000/about.html
app.use(express.static(path.join(__dirname, 'public')));
//Get route to display json
app.get('/api/members', (req,res) => {res.json(members);});
//go to Postman to see the json at GET localhost:5000/api/members
app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );