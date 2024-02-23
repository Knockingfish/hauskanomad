// server/models/User.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  // Define your schema fields here
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true }
});

// Define a method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

export default mongoose.model('User', userSchema);