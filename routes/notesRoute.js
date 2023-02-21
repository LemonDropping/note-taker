const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const notesData = require('../db/db.json');

router.get('/', (req, res) => res.json(notesData));

router.post('/', (req, res) => {
    const newNoteTitle = req.body.title;
    const newNoteText = req.body.text;

        if (newNoteTitle !== null && newNoteTitle !== undefined && newNoteText !== null && newNoteText !== undefined) {
            const newNoteData = {
                title: newNoteTitle,
                text: newNoteText,
                note_id: uuid.v4()
            };
            notesData.push(newNoteData);
            
            const noteDbPath = path.join(__dirname,'../db/db.json');
            const noteDbData = JSON.stringify(notesData);

            fs.writeFile(noteDbPath, noteDbData, (err) => {
            if (err) {
                res.status(500).json({msg: 'Error writing to database!'});
                console.log(err);
            } else {
                res.json(newNoteData)
            }
        });
}});

module.exports = router;