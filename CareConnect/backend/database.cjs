const { sql } = require('@vercel/postgres');

async function connectAndQuery() {
  try {
    // Connect to the PostgreSQL database
    const { rows } = await sql`SELECT * FROM bookings`;
    console.log('Query result:', rows);
  } catch (err) {
    console.error('Error connecting to database or querying:', err);
  }
}

connectAndQuery();