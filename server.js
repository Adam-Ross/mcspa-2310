
const express = require('express')
const {Pool} = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const dbString = process.env.DATABASE_URL
const PORT = process.env.PORT

const pool = new Pool({
    connectionString: dbString
})


const app = express()

app.get('/api/todos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM todos;')
    } catch (error) {
        console.error(error.message)
        res.json(error.message).status(500)
    }
})
