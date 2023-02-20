// declaring my variables and requiring my npm packages
const express = require('express');
// const fs = require('fs');
// const util = require('util');
const path = require('path');
const api = require('./routes/index.js')
// const notes = require('./db/db.json');

// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);

// declares are app so I can use it in the rest of my code
const app = express();
// sets default port variable to 3001 
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});




app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});





app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}}`)
});
