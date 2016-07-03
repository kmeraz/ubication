import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  facebookUserId: String,
  latitude: Number,
  longitude: Number,
  note: String,
});

const Place = mongoose.model('Place', placeSchema);

export default Place;
