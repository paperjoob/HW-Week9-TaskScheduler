const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// GET /tasks
router.get('/', (req, res) => {
    let query = `SELECT * FROM "tasks" ORDER BY "id";`; // end query
    pool.query(query).then(result => { // anything before .then is a PROMISE
    // Send the results back in an object
    res.send(result.rows); // an array of objects
    }).catch(error => {
        console.log('error getting tasks', error);
        res.sendStatus(500);
    })
}) // end GET request

router.put('/:id', (req, res) => {
    let query = `UPDATE "tasks" SET "is_complete" = TRUE WHERE "id" = $1;`;
    pool.query(query, [req.params.id]).then(result => { // anything before .then is a PROMISE
        // Send the results back in an object
        res.sendStatus(200);
        }).catch(error => {
            console.log('error getting tasks', error);
            res.sendStatus(500);
        })
})

// module exports
module.exports = router;