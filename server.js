const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware
app.use((req, res, next) => {
    console.log('Somethings hitting me...');
    next();
});

app.use((req, res, next) => {
    console.log('... and I don\'t know if I like it');
    next();
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Listening on port ${port}`);
