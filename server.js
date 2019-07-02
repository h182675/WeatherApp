const express = require('express');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const key = require('./ApiKey.json');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get('/', (req, res) => res.render('index'));
const apiKey = key.ApiKey;
app.post('/', (req, res) => {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url).then(response => {
        if (response.status !== 200) {
            res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
            return response.json();
        }
    }).then(json=>{
        let weatherText = `It's ${json.main.temp} degrees in ${json.name}.`;
        res.render('index', {weather: weatherText, error: null});
    });
});

app.listen(port, () => console.log(`Server listening on port ${port}...`));