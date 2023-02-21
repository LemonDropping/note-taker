// importing and requiring my express package 
const express = require('express');

// setting variable and importing my node modules for path
const path = require('path');

// Initialize app by giving it the value of express
const app = express();

// variables for my routing my route files 
const notesDb = require('./routes/notesRoute');
const htmlFileRoute = require('./routes/htmlFileRoute');

// local server port that allows localhost:3001/ to run on
const PORT = process.env.PORT || 3001;

// middleware for parsing JSON
app.use(express.json());

// adds static middleware to join assets in the public folder
app.use(express.static(path.join(__dirname, 'public')))

// route endpoints for my 2 route files
app.use('/api/notes', notesDb);
app.use('/', htmlFileRoute);

// listens to incoming http request and starts the server.
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);

