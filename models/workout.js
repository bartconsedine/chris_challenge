const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    workout_day: {
        type: String,
        required: false
    },
    workout_type: {
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