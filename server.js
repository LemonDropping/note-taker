// declaring my variables and requiring my npm packages
const express = require('express');
const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');
const noteDb = require('./db/db.json');
const path = require('path');


// declares are app so I can use it in the rest of my code
const app = express();
// sets default port variable to 3001 
const PORT = process.env.PORT || 3001;

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

console.log(noteDb, 'is working');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '/db/db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
    })
})
// app.get('/api/notes', (req, res) => {
//     readFile('./db/db.json', 'utf8').then(function(data) {
//         notes = [].concat(JSON.parse(data))
//         res.json(notes);

//     })

// });

// app.post('/api/notes', (req, res) => {
//     const note = req.body;
//     readFile('./db/db.json', 'utf8').then(function(data) {
//         const notes = [].concat(JSON.parse(data));
//         note.id = notes.length + 1
//         notes.push(note);
//         return notes
//     }).then(function(notes) {
//         writeFile('./db/db.json', JSON.stringify(notes))
//         res.json(note)
//     })
// });

// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/notes.html'));
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });

// //     res.sendFile(path.join(__dirname, '/public/index.html'));
// // app.get('/notes', (req, res) => {
// //     res.sendFile(path.join(__dirname, '/public/notes.html'));
// // })



// // app.use('/', routes);
// // app.use('/', notes);
// app.listen(PORT, () => {
//     console.log(`listening on http://localhost:${PORT}}`)
// });
