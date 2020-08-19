const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const logger = require('./middleware/logger');

// app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));
// 2nd way module export of route get json 
app.use('/api/members', require('./routes/api/members'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );