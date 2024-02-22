import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  profilePicture: { type: String }, // Add profile picture field
  address: { type: String }, // Add address field
  phoneNumber: { type: String }, // Add phone number field
  emailAddress: { type: String }, // Add email address field
  // Add more fields as needed
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

export default mongoose.model('User', userSchema);
