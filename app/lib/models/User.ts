import mongoose, { Document } from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  verifyOtp: {type: String, default: ''},
  verifyOtpExpireAt: {type: Number, default: 0},
  isAccountVerified: {type: Boolean, default: false},
  resetOtp: {type: String, default: ''},
  resetOtpExpireAt: {type: Number, default: 0},

});

interface IUser extends Document {
  email: string;
  password: string;
  // ... other fields
}

let User: mongoose.Model<IUser> | null = null;

if (mongoose.models.User) {
  User = mongoose.model('User');
} else {
  User = mongoose.model<IUser>('User', UserSchema);
}

export default User!;