const express = require('express');
const app = express();
const inquirer = require('inquirer');

const PORT = 3001;

app.listen(PORT, () => {
    console.log('listening on PORT ${PORT}')
});

// inquirer.prompt ([
//     {
//         type: 
//         name:
//         message:

//     }
// ]);

