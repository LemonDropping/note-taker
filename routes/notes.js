// allows a new note to be created and thebn stores it in an array?
let notes = [];

const noteWrite = (title, text) => {
    const noteInfo = { title, text, id:notes.length + 1};
    notes.push(newNote);
    return noteInfo;
};
// Grabs all of our note data
const allNotes = () => {
    return notes;
}

module.exports = {
    noteWrite,
    allNotes,
};

