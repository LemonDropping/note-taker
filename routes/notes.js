const fs = require('fs');
const path = require ('path');
const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const fromFile = () => {
    return JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  };


notes.get('/notes', (req, res) => {
    const notes = JSON.parse(data);
    res.join(notes);
});

notes.post('/notes', (req, res) => {
    const { title, text } = req.body;
  
    if (!title || !text) {
      return res.status(400).send('Title and text are required.');
    }
    
    const notes = fromFile();
    const newNote = { id: uuidv4(), title, text };

    notes.push(newNote);

    fs.writeFile('/db/db.json', JSON.stringify(notes));

    res.json(newNote)
});
module.exports = notes;