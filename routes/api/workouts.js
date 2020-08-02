const express = require('express')
const router = express.Router()

//Item Model
const Workout = require('../../models/Workout')

//@route Get api/items
//@Desc get all items
//@Desc get all items
router.get('/', (req, res) =>{
    Workout.find()
        .sort({ date: -1 })
        .then(workouts => res.json(workouts))
})

//@route POST api/items
//@Desc get all items
//@Desc get all items
router.post('/', (req, res) =>{
    const newWorkout = new Workout({
        name: req.body.name,
        workout_day: req.body.workout_day,
        workout_type: req.body.workout_type,
        workout_duration: req.body.workout_duration,
        workout_location_lon: req.body.workout_location_lon,
        workout_location_lat: req.body.workout_location_lat
    })
    newWorkout.save().then(workout=>res.json(workout))
})  

//@route DELETE api/items
//@Desc get all items
//@Desc get all items
router.delete('/:id', (req, res) =>{
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})

//@route DELETE api/items
//@Desc get all items
//@Desc get all items
router.get('/:id', (req, res) =>{
    Workout.findById(req.params.id)
    .then(workouts => res.json(workouts))
})



module.exports = router;