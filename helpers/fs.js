// const fs = require('fs');
// const path = require('path');

// // function to read data from db.json
// function readData() {
//   const data = fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf8');
//   return JSON.parse(data);
// }

// // function to write data to db.json
// function writeData(data) {
//   fs.writeFileSync(path.join(__dirname, '/db/db.json'), JSON.stringify(data));
// }

// // POST Route for a new note
// notes.post('/', (req, res) => {
//   const { title, text } = req.body;

//   if (title && text) {
//     const newNote = {
//       title,
//       text,
//       id: uuidv4(),
//     };

//     // read existing data from db.json
//     const data = readData();

//     // add new note to existing data
//     data.push(newNote);

//     // write updated data to db.json
//     writeData(data);

//     const response = {
//       status: 'success',
//       body: newNote
//     };

//     res.json(response);
//   } else {
//     res.status(400).json('Error: Please provide both title and text for the note');
//   }
// });


// // const readFromFile = util.promisify(fs.readFile);
// // /**
// //     @param {string} destination 
// //     @param {object} content 
// //     @returns {void} 
// // */

// // const writeToFile = (destination, content) => 
// //     fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
// //         err ? console.error(err) : console.info(`\nData written to ${destination}`));

// // /**
// // *  @param {object} content 
// // *  @param {string} file 
// // *  @returns {void}
// // */

// // const readAndAppend = (content, file) => {
// //     fs.readFile(file, 'utf8', (err, data) => {
// //       if (err) {
// //         console.error(err);
// //       } else {
// //         const parsedData = JSON.parse(data);
// //         parsedData.push(content);
// //         writeToFile(file, parsedData);
// //       }
// //     });
// //   };

// // module.exports = { readFromFile, writeToFile, readAndAppend };
