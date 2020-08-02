import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {

    const [formData, setFormData] = useState({})

    const handleFormChange = (e) => {
        // grabs the value of each field that is changed
        const value = e.target.value
        setFormData({
            // destr
            ...formData,
            [e.target.name]: value
        })
        console.log(formData)


    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const info = formData
        axios.post('http://localhost:5005/api/workouts/ ', info)
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location = "/list" //This line of code will redirect you once the submission is succeed
            })
    }

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label>workout day</label>
                    <input className="form-control"
                        type="text"
                        name="workout_day"
                        value={formData.workout_day}
                        onChange={handleFormChange}
                    ></input>
                </div>
                <div className="form-group">
                    <label>workout type</label>
                    <input className="form-control"
                        name="workout_type"
                        value={formData.workout_type}
                        onChange={handleFormChange}
                    ></input>
                </div>
                <div className="form-group">
                    <label>workout duration</label>
                    <input className="form-control"
                        name="workout_duration"
                        value={formData.workout_duration}
                        onChange={handleFormChange}
                    ></input>
                </div>
                <div className="form-group">
                    <label>longitude</label>
                    <input className="form-control"
                        name="workout_location_lon"
                        value={formData.workout_location_lon}
                        onChange={handleFormChange}
                    ></input>
                </div>
                <div className="form-group">
                    <label>latitude</label>
                    <input className="form-control"
                        name="workout_location_lat"
                        value={formData.workout_location_lat}
                        onChange={handleFormChange}
                    ></input>
                </div>
                <input type="submit" value="Submit" />

            </form>
        </div>
    )
}

export default Form