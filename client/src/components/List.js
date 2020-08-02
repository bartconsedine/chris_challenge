import React, { useState, useEffect} from 'react'
import axios from 'axios'

const List = (props) => {


    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:5005/api/workouts/',
            );

            setData(result.data);
            console.log(result.data)
        };

        fetchData();
    }, []);
    function NumberList(data) {

        console.log(data)
        const workouts = data;
        const listItems = workouts.map((item, index) =>
            <>  
                <h1>{`${item.workout_day}'s workout`}</h1>
                <li key={index}>
                    Duration: {item.workout_duration}
                </li>
                <li key={index + 1}>
                    workout type: {item.workout_type}
                </li>
                <br></br>
            </>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    return (
        <div>
            <ul>
                {data.length>1 && NumberList(data)}

            </ul>
        </div>
    )
}

export default List