const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('https://care-connectdb.vercel.app/bookings', async (req, res) => {
  console.log('Received a POST request to /bookings'); 

  let { location, hospitalName, emergencyType, note, nurseAssistance } = req.body;
  if (emergencyType === 'type2') {
    emergencyType = 'Type 2';
  } else if (emergencyType === 'type3') {
    emergencyType = 'Type 3';
  } else {
    emergencyType = 'Type 1';
  }
  nurseAssistance = nurseAssistance === 'yes' ? true : false;
  try {
  await prisma.bookings.create({
    data: {
      location,
      hospitalName,
      emergencyType,
      note,
      nurseAssistance
    }
  });

  res.status(200).json({ message: 'Data inserted successfully' });
}
catch (error) {
  console.error('Error inserting into database:', error);
  res.status(500).json({ error: 'Internal server error' });
}

});

app.get('https://care-connectdb.vercel.app/bookings', async (req, res) => {
  try {
    const latestBooking = await prisma.bookings.findFirst({
      orderBy: {
        id: 'desc',
      },
    });

    if (!latestBooking) {
      return res.status(404).json({ error: 'No bookings found' });
    }

    res.status(200).json(latestBooking);
  } catch (error) {
    console.error('Error querying database with Prisma:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});