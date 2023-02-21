// see htmlFileRoute.js for understanding what the bottom 4 lines do
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// initializes unique identifier for notes that are saved
const uuid = require('uuid');

// imports data from db.json
const notesData = require('../db/db.json');

// GET method that sets up route for root endpoint'/'
router.get('/', (req, res) => res.json(notesData));

// POST method that is for my notes 
router.post('/', (req, res) => {

    // declaring variables for my title and text from my db.json files by using .body.title for my 
    // title in my note, and .body.text for the text portion of my note
    const newNoteTitle = req.body.title;
    const newNoteText = req.body.text;

    // if statement saying that if my newNoteTitle and newNoteText are left empty, an error will be logged
        if (newNoteTitle !== null && newNoteTitle !== undefined && newNoteText !== null && newNoteText !== undefined) {

            // declaring a new variable with the properties that will be written to db.json
            const newNoteData = {
                title: newNoteTitle,
                text: newNoteText,
                note_id: uuid.v4()
            };

            // adds newNoteData to notesData array for db.json
            notesData.push(newNoteData);
            
            // variables for constructing my file path and then turning my array of data into a string
            const noteDbPath = path.join(__dirname,'../db/db.json');
            const noteDbData = JSON.stringify(notesData);

            // using fs so that if an error happens it will write an error message to db.json
            fs.writeFile(noteDbPath, noteDbData, (err) => {
            if (err) {
                res.status(500).json({msg: 'Error writing to database!'});
                console.log(err);
            } else {
                res.json(newNoteData)
            }
        });
}});

// exports my note data
module.exports = router;