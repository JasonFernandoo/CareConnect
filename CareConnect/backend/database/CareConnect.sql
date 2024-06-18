CREATE DATABASE ambulanceBooking;

USE ambulanceBooking;

CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(255),
    hospitalName VARCHAR(255),
    emergencyType VARCHAR(255),
    note TEXT,
    nurseAssistance VARCHAR(255)
);
