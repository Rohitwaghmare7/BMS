const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showtimeSchema = new Schema({
    time: {
        type: Date,
        required: true
    },
    seats: {
        type: [Boolean],
        default: Array(60).fill(false)
    }
});

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: [
        {
            type: String,
            required: true
        }
    ],
    language: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    cast: [
        {
            type: String,
            required: true
        }
    ],
    director: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    posterUrl: {
        type: String,
        required: true
    },
    showtimes: [showtimeSchema]
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
