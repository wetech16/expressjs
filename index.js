const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger')

app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/members', (req,res) => {res.json(members);});
//Get Single Member
app.get('/api/members/:id', (req, res) => {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
})
app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );