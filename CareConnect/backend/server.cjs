const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

const pool = new Pool({
  connectionString: 'postgres://default:ySoAlI3jbD0d@ep-proud-cherry-a186wsy9.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require'
});

app.use(bodyParser.json());
app.use(cors());

app.post('/api/bookings', async (req, res) => {
  console.log('Received a POST request to /api/bookings');

  const { location, hospitalName, emergencyType, note, nurseAssistance } = req.body;
  const query = 'INSERT INTO bookings (location, hospitalName, emergencyType, note, nurseAssistance) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const values = [location, hospitalName, emergencyType, note, nurseAssistance];
  console.log('SQL Query:', query);
  console.log('Data to be inserted:', values);

  try {
    const result = await pool.query(query, values);
    console.log('Data inserted into database');
    res.status(200).json({ message: 'Data inserted successfully', data: result.rows[0] });
  } catch (error) {
    console.error('Error inserting into database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/bookings', async (req, res) => {
  const query = 'SELECT * FROM bookings ORDER BY id DESC LIMIT 1'; // Assuming 'id' is the primary key
  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows[0]); // Sending only the latest entry
  } catch (error) {
    console.error('Error querying database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});