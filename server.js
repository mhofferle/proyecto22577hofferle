const express = require('express')
const app = express()
var hbs = require('hbs');
const port = 3000

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index",{
        titulo: "Mi página web"
    })
})

app.get('/about', (req, res) => {
    res.render("about",{
        titulo: "Sobre Nosotros"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
