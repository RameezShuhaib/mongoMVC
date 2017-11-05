const mongoose = require('mongoose')

module.exports = mongoose.model("Movie", {
    name: String,
    rating: Number
});