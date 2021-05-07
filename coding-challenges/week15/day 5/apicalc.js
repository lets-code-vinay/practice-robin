const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('working');
});

app.post('/add', (req, res) => {
    res.send({
        num1: Number(req.body.num1),
        num2: Number(req.body.num2),
        result: Number(req.body.num1) + Number(req.body.num2)
    });
});

app.post('/sub', (req, res) => {
    res.send({
        num1: Number(req.body.num1),
        num2: Number(req.body.num2),
        result: Number(req.body.num1) - Number(req.body.num2)
    });
});

app.post('/mult', (req, res) => {
    res.send({
        num1: Number(req.body.num1),
        num2: Number(req.body.num2),
        result: Number(req.body.num1) * Number(req.body.num2)
    });
});

app.post('/div', (req, res) => {
    res.send({
        num1: Number(req.body.num1),
        num2: Number(req.body.num2),
        result: Number(req.body.num1) / Number(req.body.num2)
    });
});

app.listen(1212);