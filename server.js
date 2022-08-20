const express = require('express')
const app = express()
const port = process.env.PORT || 3010
app.use(express.static('public'));

var bodyParser = require('body-parser');

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render("index");
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
  
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});