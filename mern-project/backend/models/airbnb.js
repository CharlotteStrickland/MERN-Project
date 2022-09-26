import mongoose from "mongoose";

const airbnbSchema = mongoose.Schema({
  AirbnbNumber: Number,
  name: String,
  state: String,
  section: {
    type: String,
    default: "A",
  },
  vibe: [String],
});

const airbnb = mongoose.model("airbnb", airbnbSchema);

export default airbnb;
