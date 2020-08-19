const express = require('express');
const router = express.Router();
const members = require('../../Members')

router.get('/api/members', (req,res) => {res.json(members);});
//Get Single Member if not found
router.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) { 
         res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(404).json( {msg: `not found member id: ${req.params.id} `})
    }
})

module.exports = router;