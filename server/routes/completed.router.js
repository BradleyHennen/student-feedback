const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    let feedback = req.body;
    console.log('Post feedback', feedback);
    
    let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
      .then( (response) => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to add new review', feedback);
        console.log(error);
        res.sendStatus(500);
      })
  })

router.get('/', (req, res) => {
    console.log('Getting all reviews');
    pool.query('SELECT * FROM "feedback" ORDER BY "date"')
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting feedback', error);
        res.sendStatus(500);
    })
})

module.exports = router;