const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');
//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Home Page View
app.get('/', (req, res) => res.render('index', {
    title: "Member App",
    members
}));

// app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));
// 2nd way module export of route get json 
app.use('/api/members', require('./routes/api/members'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );