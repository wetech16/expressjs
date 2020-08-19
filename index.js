const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger')

app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/members', (req,res) => {res.json(members);});
//Get Single Member if not found
app.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) { 
         res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(404).json( {msg: `not found ${req.params.id} `})
    }
})
app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );