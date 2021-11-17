const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 64,
  },
}),
{ timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
