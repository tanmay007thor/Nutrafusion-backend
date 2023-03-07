import { Schema, Types } from 'mongoose';

const reviewSchema = new Schema({
  id: String,
  review: String,
});

export const UserSchema = new Schema({
  id: String,
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
    match: /^\S+@\S+\.\S+$/,
  },
  password: String,
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other'],
  },
  reviews: [reviewSchema],
}, {
  timestamps: true,
});
