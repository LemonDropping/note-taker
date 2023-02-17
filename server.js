// declaring my variables and requiring my npm packages
const express = require('express');
// error in these 2 lines of code below this
const routeApi = require('./routes/routeAPI');
const routehtml = require('./routes/routesHTML')
const path = require('path');

const app = express();
// sets default port variable to 3001 
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/index.html'));
  });
  
app.get('/notes', (res, req) => {
    res.sendFile (__dirname, 'develop/public/notes.html');
})

app.use(express.static('./develop/public'));

app.listen(PORT, () => {
    console.log('listening on PORT ${3001}')
});

// inquirer.prompt ([
//     {
//         type: 
//         name:
//         message:

//     }
// ]);

