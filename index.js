const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

//localhost:5000/about.html
app.use(express.static(path.join(__dirname, 'public')));

//Get route to display json
const members = [
    {id: 1, name: 'Shannon Jackson', email: 'shannon@gmail.com', status: 'active'},
    {id: 2, name: 'Michael Jacks', email: 'michale@gmail.com', status: 'active'}
];
app.get('/api/members', (req,res) => {res.json(members);});
//go to Postman to see the json at GET localhost:5000/api/members


app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );