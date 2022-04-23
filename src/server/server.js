// import express from 'express';
const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('hello');
});

app.listen(3000, () => {
    console.log('stated on localhsot:3000')
});