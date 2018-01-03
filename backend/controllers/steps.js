const express = require('express');

module.exports = (dataLoader) => {
    const stepsController = express.Router();
    stepsController.get('/', (req,res) => {
        dataLoader.getAllLos()
        // .then(data=>console.log('data:', data))
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err));
      });
    
    return stepsController;
}