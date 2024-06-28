const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://default:ySoAlI3jbD0d@ep-proud-cherry-a186wsy9.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require'
});

client.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database');
});

client.query('SELECT * FROM bookings', (error, results) => {
  if (error) {
    console.error('Error querying database: ' + error.stack);
    return;
  }
  console.log('Query result:', results.rows);
  client.end();
});
