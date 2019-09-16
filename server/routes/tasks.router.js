const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// GET /tasks
router.get('/', (req, res) => {
    let query = `SELECT * FROM "tasks" ORDER BY "id";`; // end query
    pool.query(query).then(result => { // anything before .then is a PROMISE
    // Send the results back in an object
    res.send(result.rows);
    console.log(result.rows);
    })
}) // end GET request


// module exports
module.exports = router;