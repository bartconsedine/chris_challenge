const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    workout_day: {
        type: String,
        required: false
    },
    workout_type_0: {
        type: String,
        required: false
    },
    workout_type_1: {
        type: String,
        required: false
    },
    workout_type_2: {
        type: String,
        required: false
    },
    workout_type_3: {
        type: String,
        required: false
    },
    workout_type_4: {
        type: String,
        required: false
    },
    workout_duration: {
        type: String,
        required: false
    },
    workout_location_lat: {
        type: String,
        required: false
    },
    workout_location_lon: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Workout = mongoose.model('workout', WorkoutSchema)