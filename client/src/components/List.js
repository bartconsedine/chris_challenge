import React, { useState, useEffect } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const WORKOUTS_QUERY = gql`
    query WorkoutsQuery{
        exercises {
            workout_day
            workout_type
            workout_duration
            workout_location_lat
            workout_location_lon
        }
}`

const List = () => {



    return (
        <div className="container">
            <h1 className="display-4 my-3">Workouts</h1>
            <Query query={WORKOUTS_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div className="spinner-border"></div>
                    if (error) console.log(error)
                    console.log(data)
                    return (
                        <>
                            {
                                data.exercises.map((workout) =>
                                    <div>
                                        <h1>{workout.workout_day}</h1>
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">Workout Type: {workout.workout_type}
                                                <span className="badge badge-primary badge-pill">Duration: {workout.workout_duration} minutes   </span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">Workout located at {workout.workout_location_lat} latitude and {workout.workout_location_lon} longitude</li>
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