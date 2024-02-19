// server/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // Define your schema fields here
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true }
});

export default mongoose.model('User', userSchema);
