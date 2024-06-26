const express = require('express');
const bodyParser = require('body-parser');
const { sql } = require('@vercel/postgres');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/bookings', async (req, res) => {
  console.log('Received a POST request to /api/bookings');

  const { location, hospitalName, emergencyType, note, nurseAssistance } = req.body;

  try {
    const result = await sql`
      INSERT INTO bookings (location, "hospitalName", "emergencyType", note, "nurseAssistance")
      VALUES (${location}, ${hospitalName}, ${emergencyType}, ${note}, ${nurseAssistance})
      RETURNING *;
    `;
    console.log('Data inserted into database');
    res.status(200).json({ message: 'Data inserted successfully', data: result.rows[0] });
  } catch (error) {
    console.error('Error inserting into database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/bookings', async (req, res) => {
  try {
    const result = await sql`SELECT * FROM bookings ORDER BY id DESC LIMIT 1;`;
    res.status(200).json(result.rows[0]); // Sending only the latest entry
  } catch (error) {
    console.error('Error querying database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});