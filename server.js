const express = require('express');
const path = require('path');
const app = express();
const notesDb = require('./routes/notesRoute');
const htmlFileRoute = require('./routes/htmlFileRoute');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/notes', notesDb);
app.use('/', htmlFileRoute);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);

