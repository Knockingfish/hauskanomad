import Booking from '../models/Booking.js';

export const addBooking = async (req, res) => {
	const newBooking = new Booking(req.body);
	try {
		const savedBooking = await newBooking.save();
	
		res.status(200).json({
		  success: true,
		  message: "Tour booked successfully",
		  data: savedBooking,
		});
	  } catch (err) {
		res.status(500).json({
		  success: false,
		  message: "Could not book tour",
		});
	  }

};
