const notes = require('express').Router();
const { readFromFile, readAndAppend, } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

notes.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => 
        res.json(JSON.parse(data)));
});

notes.post('/notes', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note has been added!`);
    } else {
        res.error('Could ot add note!');
    }
});

module.exports = notes;
