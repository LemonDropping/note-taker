const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const notesData = require('../db/db.json');

router.get('/', (req, res) => res.json(notesData));

router.post('/', (req, res) => {
    const newNote = req.body;
        if (newNote === 0) {
            res.status(400).json;
            console.log('newNote needs a title and text!');
        } else {
            const newNoteData = {
                title,
                text,
                note_id: uuid.v4(),
            };
            notesData.push(newNoteData);
            res.json(notesData);
        }
});

module.exports = router;