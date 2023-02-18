const fs = require('fs');

function writeTo(data) {
    fs.writeFile('db.json', JSON.stringify(data), 
    function (err) { 
        if(err)throw err;
        console.log('Note written to db.json');
    });
};