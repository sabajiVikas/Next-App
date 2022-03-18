const mongoose = require(`mongoose`);

const HeroSchema = new mongoose.Schema({
  superHero: {
    type: String,
    unique: true,
    required: [true, `SuperHero Name is Required...`],
    trim: true,
  },
  realName: {
    type: String,
    required: true,
    maxlength: [200, `Please Keep RealName Short...`],
  },
});

// NextJS Way
module.exports = mongoose.models.Hero || mongoose.model(`Hero`, HeroSchema);
