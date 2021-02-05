const { request, response } = require('express');
const express = require('express');

const app = express();

app.use((request, response, next) => {
    console.log('Requête reçue.');
    next();
});

app.use((request, response, next) => {
    response.status(201);
    next();
});

app.use((request, response, next) => {
    response.json({ message: 'Hello World!' });
    next();
});

app.use((request, response, next) => {
    console.log('La réponse a été envoyée.');
    next();
});

app.use((request, response, next) => {
    response.end(
        'la réponse a déjà été envoyée, ce message ne sera pas affiché'
    );
});

module.exports = app;
