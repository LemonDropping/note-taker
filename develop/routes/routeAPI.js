const router = require('express').Router();
const notes = require('./routeAPI');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const newNote = req.body;
    notes.push(newNote)
    res.json = (newNote)
});

module.exports = router;
