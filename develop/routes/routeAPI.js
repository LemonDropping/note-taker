const router = router('express').router();
const notes = require('.../notes');

router.get('/notes', (res, req) => {
    res.json(notes);
})

router.post('/notes', (res, req) => {
    const newNote = req.body;
    notes.push(newNote)
    res.json = (newNote)
})
