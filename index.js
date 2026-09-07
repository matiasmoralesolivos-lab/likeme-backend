require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()

app.use(cors())
app.use(express.json())

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})



app.get('/posts', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM posts')
        res.json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al obtener los posts')
    }
})

app.get('/', (req, res) => {
    res.send('estamos al aire')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor escuchando en http://localhost:3000')
})

app.post('/posts', async (req, res) => {
    try {
        const { titulo, url, descripcion } = req.body

        const result = await pool.query(
            'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
            [titulo, url, descripcion, 0]
        )

        res.json(result.rows[0])
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al guardar el post')
    }
})

app.put('/posts/like/:id', async (req, res) => {
    try {
        const { id } = req.params

        const result = await pool.query(
            'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *',
            [id]
        )

        res.json(result.rows[0])

    } catch (error) {
        console.log(error)
        res.status(500).send('Error al agregar like')
    }
})

app.delete('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params

        const result = await pool.query(
            'DELETE FROM posts WHERE id = $1 RETURNING *',
            [id]
        )

        res.json(result.rows[0])

    } catch (error) {
        console.log(error)
        res.status(500).send('Error al eliminar el post')
    }
})