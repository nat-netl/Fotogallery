const express = require('express');
const { Pool } = require('pg'); 
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  user: 'postgres',        
  host: 'localhost',          
  database: 'Gallery',   
  password: 'Filosof', 
  port: 5433,                 
});

app.post('/messages', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).send('All fields are required.');
  }

  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO messages (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, subject, message]
    );
    client.release();
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Error creating message.');
  }
});

app.get('/photos', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM photos');
    client.release();
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Error fetching photos');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

process.on('SIGINT', async () => {
  console.log('SIGINT signal received: closing http server');
  await pool.end(); 
  console.log('PostgreSQL pool closed');
  process.exit(0);
});