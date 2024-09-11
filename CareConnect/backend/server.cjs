const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3305',
  user: 'root',
  password: 'JasonF3205',
  database: 'CareConnect'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

app.use(bodyParser.json());
app.use(cors());

app.post('/api/bookings', (req, res) => {
  console.log('Received a POST request to /api/bookings'); 

  const { location, hospitalName, emergencyType, note, nurseAssistance } = req.body;

  const query = 'INSERT INTO bookings (location, hospitalName, emergencyType, note, nurseAssistance) VALUES (?, ?, ?, ?, ?)';
  console.log('SQL Query:', query);
  console.log('Data to be inserted:', [location, hospitalName, emergencyType, note, nurseAssistance]);

  connection.query(query, [location, hospitalName, emergencyType, note, nurseAssistance], (error, results, fields) => {
    if (error) {
      console.error('Error inserting into database:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    console.log('Data inserted into database');
    res.status(200).json({ message: 'Data inserted successfully' });
  });
});

app.get('/api/bookings', (req, res) => {
  const query = 'SELECT * FROM bookings ORDER BY id DESC LIMIT 1'; // Assuming 'id' is the primary key
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(200).json(results[0]); // Sending only the latest entry
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});