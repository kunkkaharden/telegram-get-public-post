const express = require('express');
const app = express();

const routes = require('./routes/index');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    next();
});

app.use(routes);
app.use((req, res, next) => {
    res.status(400).send('<h3>Page not found</h3>');
});
app.listen(3000);