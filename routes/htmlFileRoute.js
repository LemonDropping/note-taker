const express = require('express');

// used for initializing my route for my html files
const router = express.Router();

// Initializing fs and path node modules
const fs = require('fs');
const path = require('path');

// sets my /notes endpoint and sends my notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// sets my catch all wildcard and sends my index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// exports my html routes 
module.exports = router;
