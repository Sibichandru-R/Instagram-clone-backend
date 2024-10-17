import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: { type: String, unique : true },
  password: { type: String },
  fullName: { type: String },
  userName: { type: String, unique : true },
  created_date: { type: Date, default : new Date() }
})

export const userModel = mongoose.model('User', userSchema)
