const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const members = require('./Members');

//localhost:5000/about.html
app.use(express.static(path.join(__dirname, 'public')));

//Get route to display json
app.get('/api/members', (req,res) => {res.json(members);});
//go to Postman to see the json at GET localhost:5000/api/members


app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );