const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

const client = new Client({
  connectionString: 'postgres://default:ySoAlI3jbD0d@ep-proud-cherry-a186wsy9.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require'
});

client.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

app.use(bodyParser.json());
app.use(cors());

app.post('/api/bookings', async (req, res) => {
  const { location, hospitalName, emergencyType, note, nurseAssistance } = req.body;
  const userID = '1';
  const status = 'pending';

  try {
    const query = 'INSERT INTO booking_data (userID, location, hospitalName, emergencyType, note, nurseAssistance, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING bookingID';
    const values = [userID, location, hospitalName, emergencyType, note, nurseAssistance, status];
    const result = await client.query(query, values);

    const newBookingID = result.rows[0].bookingID;

    console.log('Data inserted into database');
    res.status(200).json({ message: 'Data inserted successfully', bookingID: newBookingID });
  } catch (error) {
    console.error('Error inserting into database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/bookings', async (req, res) => {
  try {
    const query = 'SELECT * FROM booking_data ORDER BY bookingID DESC LIMIT 1';
    const result = await client.query(query);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error querying database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
