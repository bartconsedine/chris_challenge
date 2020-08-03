const express = require('express')
const router = express.Router()

//workout Model
const Workout = require('../../models/Workout')

//@route Get api/workout
//@Desc get all workout
//@Desc get all workout
router.get('/', (req, res) =>{
    Workout.find()
        .sort({ date: -1 })
        .then(workouts => res.json(workouts))
})

//@route POST api/workout
//@Desc get all workout
//@Desc get all workout
router.post('/', (req, res) =>{
    const newWorkout = new Workout({
        name: req.body.name,
        workout_day: req.body.workout_day,
        workout_type_0: req.body.workout_type_0,
        workout_type_1: req.body.workout_type_1,
        workout_type_2: req.body.workout_type_2,
        workout_type_3: req.body.workout_type_3,
        workout_type_4: req.body.workout_type_4,
        workout_duration: req.body.workout_duration,
        workout_location_lon: req.body.workout_location_lon,
        workout_location_lat: req.body.workout_location_lat
    })
    newWorkout.save().then(workout=>res.json(workout))
})  

//@route DELETE api/workout
//@Desc get all workout
//@Desc get all workout
router.delete('/:id', (req, res) =>{
    Workout.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})

//@route DELETE api/workout
//@Desc get all workout
//@Desc get all workout
router.get('/:id', (req, res) =>{
    Workout.findById(req.params.id)
    .then(workouts => res.json(workouts))
})



module.exports = router;