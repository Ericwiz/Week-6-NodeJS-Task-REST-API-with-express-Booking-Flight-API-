const express = require('express');

const router = express.Router();
const {
    allFlights,
    singleFlight,
    createFlight,
    updateFlight,
    deleteFlight
} = require('../controllers/flightController');

// get all 
router.get('/', allFlights)

// get single
router.get('/flights/:id', singleFlight)

// create 
router.post('/flight', createFlight)

// update
router.patch('/flights/:id', updateFlight)

// delete
router.delete('/flights/:id', deleteFlight)

module.exports = router;

