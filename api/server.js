const express = require('express')

const db = require('../data/connection');

const server = express();
server.use(express.json());



server.get('/api/cars', (req , res ) => {
    db('cars')
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json({ message: error.message})
        })
})


server.post('/api/cars', (req, res) => {
    const newCar = req.body
    db('cars').insert(newCar)
        .then(ids => {
            db('cars').where({id: ids[0]})
        .then(newCarEntry => {
            res.status(201).json(newCarEntry)
        });
        })
        .catch(error => {
            console.log(error)
        })
})

module.exports = server;