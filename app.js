const express = require('express');


const app = express();
const PORT = 5000;

//Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));

//templating engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

//routes
const mainRoute = require('./src/route/news');
app.use('/', mainRoute);

//Server listening on port
app.listen(PORT, ()=> console.log(`server listening on port ${PORT}`));