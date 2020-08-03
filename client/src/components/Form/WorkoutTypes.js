import React from 'react'

const WorkoutTypes = (props) => {
    return(
        <div className="form-group">
                    <label>{`workout ${props.count+1}`}</label>
                    <input className="form-control"
                        name={`workout_type_${props.count}`}
                        value={props.value}
                        onChange={props.handleFormChange}
                    ></input>
                </div>
    )
}

export default WorkoutTypes