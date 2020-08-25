import React, { useState, useEffect } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import axios from 'axios'

const WORKOUTS_QUERY = gql`
    query WorkoutsQuery{
        exercises {
            _id
            workout_type_0
            workout_type_1
            workout_type_2
            workout_type_3
            workout_type_4    
            workout_duration
            workout_location_lat
            workout_location_lon
            date
        }
}`

const deleteWorkout = (id) => {
    axios.delete(`http://localhost:5005/api/workouts/${id}`)
  .then(function (response) {
    window.location.reload();

  })

  console.log("delete pressed")
}


const renderTypes = (workout) => {
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Workout Type: {workout}
                                            </li>
    )
}

const convertStringToDate = (s) => {
    return new Date(s)
}


const List = () => {



    return (
        <div className="container">
            <h1 className="display-4 my-3">Workouts</h1>
            <Query query={WORKOUTS_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div className="spinner-border"></div>
                    if (error) console.log(error)
                    return (
                        <>
                            {
                                data.exercises.map((workout) =>
                                
                                    <div>
                                        
                                        {/* <h1>{`${workout.date.getMonth()}`}</h1> */}
                                        <h1>{`${convertStringToDate(workout.date).getMonth()}`}</h1>
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <span className="badge badge-primary badge-pill">Duration: {workout.workout_duration} minutes   </span>
                                            </li>
                                            {workout.workout_type_0 ? renderTypes(workout.workout_type_0): null}
                                            {workout.workout_type_1 ? renderTypes(workout.workout_type_1): null}
                                            {workout.workout_type_2 ? renderTypes(workout.workout_type_2): null}
                                            {workout.workout_type_3 ? renderTypes(workout.workout_type_3): null}
                                            {workout.workout_type_4 ? renderTypes(workout.workout_type_4): null}
                                            <li className="list-group-item d-flex justify-content-between align-items-center">Workout located at {workout.workout_location_lat} latitude and {workout.workout_location_lon} longitude</li>
                                            <li><button onClick={()=>deleteWorkout(workout._id)}>Delete</button></li>

                                        </ul>
                                    </div>
                                )
                            }
                        </>
                    )
                }}
            </Query>

        </div>
    )
}

export default List