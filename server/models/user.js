import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  facebookUserId: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model('User', userSchema);

export default User;
