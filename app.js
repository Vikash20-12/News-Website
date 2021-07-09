const express = require('express');
const path = require('path');


const app = express();
const PORT = 5000;

//Static files
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname,'public/css')));

//templating engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'./src/views'));

//routes
const mainRoute = require('./src/route/news');
app.use('/', mainRoute);

app.get('/',(req, res)=>{
    res.render(news);
})

//Server listening on port
app.listen(PORT, ()=> console.log(`server listening on port ${PORT}`));