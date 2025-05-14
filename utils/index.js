import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password, hashed) => {
  return await bcrypt.compare(password, hashed);
};

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
