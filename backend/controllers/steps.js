const express = require('express');

module.exports = (dataLoader) => {
    const stepsController = express.Router();
    stepsController.get('/', (req, res) => {
        dataLoader.getAllLos()
            .then(data => res.json(data))
            .catch(err => res.status(400).json(err));
    });

    stepsController.post('/edit-lo', (req, res) => {
        console.log('req.body: ', req.body)
        dataLoader.editLo({
            originalLO: req.body.originalLO,
            lO: req.body.lO,
            id: req.body.id
        })
            .then(data => res.status(201).json(data))
            .catch(err => res.status(400).json(err));
    });

    return stepsController;
}

// res.send('POST request sent')