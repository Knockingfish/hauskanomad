import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    guests: { type: Number, required: true },
    rooms: { type: Number, required: true },
    destination: { type: String, required: true }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
