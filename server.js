// declaring my variables and requiring my npm packages
const express = require('express');
const routeApi = require('./routes/routeAPI');
const routeHtml = require('./routes/routeHTML')
const path = require('path');
// const fs = require('fs')

const app = express();
// sets default port variable to 3001 
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });
  
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

app.use(express.static(path.join(__dirname, '/public')));

app.use('/api', routeApi)
app.use('/', routeHtml);

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}}`)
});

// inquirer.prompt ([
//     {
//         type: 
//         name:
//         message:

//     }
// ]);

