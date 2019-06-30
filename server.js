const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

const port = 3000;

app.get('/', (req, res) => res.render('index'));

app.post('/', (req,res)=>{
   let city = req.body.city;
   let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

   res.render('index');
});

app.listen(port, () => console.log(`Server listening on port ${port}...`));