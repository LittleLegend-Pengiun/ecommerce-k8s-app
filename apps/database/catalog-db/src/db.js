const { Pool } = require('pg')
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'user123',
    password: 'password123',
    database: 'db123'
})

module.exports = pool