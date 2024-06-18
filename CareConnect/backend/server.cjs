const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: 'localhost',
  port: '{port}',
  user: 'root',
  password: '{password}',
  database: '{database}'
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
