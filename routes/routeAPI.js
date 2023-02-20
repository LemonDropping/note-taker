const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const app = express();
app.post('/db/db.json', (req, res) => {
    const newNote = req.body;

    newNote.id = uuidv4();

    writeToFile('./db/db.json', newNote)
        .then(() => {
            res.json({ message: 'Note Created' });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'failed to create note' })
        })
})

module.exports = router;
