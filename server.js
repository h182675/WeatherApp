const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.static('public'));
const port = 3000;

app.get('/', (req, res) => res.render('index'));

app.listen(port, () => console.log(`Server listening on port ${port}...`));