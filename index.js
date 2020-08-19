const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const logger = require('./middleware/logger');
const membersApi = require('./routes/api/members');

// app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));
app.use(membersApi);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );