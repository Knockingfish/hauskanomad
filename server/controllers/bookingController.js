import Booking from '../models/Booking.js';

// Controller function to add a new booking
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
        console.error("Error adding booking:", err);
        res.status(500).json({
            success: false,
            message: "Could not book tour",
            error: err.message
        });
    }
};

// Controller function to fetch all bookings
export const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json({
            success: true,
            message: "Bookings retrieved successfully",
            data: bookings,
        });
    } catch (err) {
        console.error("Error fetching bookings:", err);
        res.status(500).json({
            success: false,
            message: "Could not fetch bookings",
            error: err.message
        });
    }
};

// Controller function to delete a booking by ID
export const deleteBooking = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBooking = await Booking.findByIdAndDelete(id);
        if (!deletedBooking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Booking deleted successfully",
            data: deletedBooking,
        });
    } catch (err) {
        console.error("Error deleting booking:", err);
        res.status(500).json({
            success: false,
            message: "Could not delete booking",
            error: err.message
        });
    }
};
