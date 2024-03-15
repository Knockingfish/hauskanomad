import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

// TLDR; this is a way to identify a user of the website by making a unique identifying "token".

const authMiddleware = async (req, res, next) => {
	try {
		// Extract token from request header
		const token = req.headers.authorization.split(' ')[1];

		if (!token) {
			return res.status(401).json({ message: 'Authorization token is missing.' });
		}

		// Verify token
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		const user = await User.findById(decodedToken.userId);

		if (!user) {
			return res.status(401).json({ message: 'User not found.' });
		}

		// Attach authenticated user to request object
		req.user = user;
		next();
	} catch (error) {
		console.error('Error in authentication middleware:', error);
		return res.status(401).json({ message: 'Invalid or expired token.' });
	}
};

export default authMiddleware;
