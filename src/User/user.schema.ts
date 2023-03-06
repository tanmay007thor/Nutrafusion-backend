import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
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
}, {
  timestamps: true,
});
