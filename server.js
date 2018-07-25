const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
const beers = require('./app/routes/beers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/beers', {
    useNewUrlParser: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to "Beers" database!');
});
mongoose.connection.on('error', (err) => {
    console.log(`Error: ${err}`)
})


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to our API! Try hitting the /api endpoint.' });
});

app.use('/api', router);

router.get('/', (req, res) => {
    res.json({ message: 'Great! Now checkout the /api/beers endpoinnt.' });
});

router.use('/beers/', beers);

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Listening on port ${port}`);
