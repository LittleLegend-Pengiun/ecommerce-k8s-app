const { Router } = require('express');
const pool = require('../database/db');

const router = Router();

router.get('/', async (req, res) => {
    try {
        // await pool.connect();
        const data = await pool.query('SELECT * FROM schools')
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    const { name, location } = req.body
    try {
        await pool.query('INSERT INTO schools (name, address) VALUES ($1, $2)', [name, location])
        res.status(200).send({ message: "Successfully added child" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.get('/setup', async (req, res) => {
    try {
        await pool.query('CREATE TABLE schools( id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100))')
        res.status(200).send({ message: "Successfully created table" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})


module.exports = router;