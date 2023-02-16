const express = require('express');
const app = express();


const PORT = 3001;

app.get('api/notes', (req, res) =>  {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            return res.sendStatus(404);
            console.error(err);
        }
        const notes = JSON.parse(data);
        res.join(notes);
    });
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });
  

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

