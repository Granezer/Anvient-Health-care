const mongoose = require("mongoose");
const time = require('../time')

const applySchema = new mongoose.Schema({
    appliedFor: {
        type: Map,
        required: true
    },
    full_name: {
        type: String,
        required: [true, "Pls include full names"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Pls include email"],
        trim: true
    },
    phone_number: {
        type: String,
        required: [true, "Pls include phone number"],
    trim: true
    },
    profession: {
        type: String,
        required: [true, "Pls include profession"],
        trim: true
    },
    experience: {
        type: String,
        required: [true, "Pls include experience"],
        trim: true
    },
    how_ready: {
        type: String,
        required: [true, "Pls specify how ready you are"],
        trim: true
    },
    time: {
        type: String,
        default: time
    },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Application", applySchema);
