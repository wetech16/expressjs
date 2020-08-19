const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

//localhost:5000/about.html
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );