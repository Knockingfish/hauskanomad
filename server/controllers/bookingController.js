import Booking from '../models/Booking.js';

export const addBooking = async (req, res) => {
	const bookingData = req.body;

	try {
		const booking = new Booking(bookingData);
		await booking.save();
		res.status(201).json({ message: "Booking submitted successfully" });
	} catch (error) {
		res.status(500).json({ error: "Failed to submit booking" });
	}
};
