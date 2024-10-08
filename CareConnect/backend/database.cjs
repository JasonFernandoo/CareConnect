const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', 
  port: '3305',
  user: 'root',  
  password: 'JasonF3205', 
  database: 'CareConnect'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database');
});

connection.query('SELECT * FROM bookings', (error, results, fields) => {
  if (error) {
    console.error('Error querying database: ' + error.stack);
    return;
  }
  console.log('Query result:', results);
});

connection.end();