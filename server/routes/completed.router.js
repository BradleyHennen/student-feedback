const express = require('express');
const router = express.Router();

const characters = [];


router.post('/', (req, res) => {
    let newCharacter = req.body;
    characters.push(newCharacter);
    console.log('Added character: ', newCharacter);
    console.log('We now have: ', characters);
    res.sendStatus(201);
});

router.get('/', (req, res) => {
    console.log('Getting all characters');
    res.send(characters);
})

module.exports = router;