// models/Booking.js

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	guests: { type: Number, required: true },
	rooms: { type: Number, required: true }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
