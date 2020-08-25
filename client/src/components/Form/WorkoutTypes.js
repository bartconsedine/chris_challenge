import React from 'react'

const WorkoutTypes = (props) => {

    console.log(props.value)
    return(
        <div className="form-group">
                    <label>{`workout ${props.count+1}`}</label>
                    <input className="form-control"
                        name={`workout_type_${props.count}`}
                        // name={`workout_type`}
                        value={props.value}
                        onChange={props.handleFormChange}
                    ></input>
                </div>
    )
}

export default WorkoutTypes