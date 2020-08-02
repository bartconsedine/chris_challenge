import React from 'react'
import {Switch, Route} from 'react-router-dom'
import WorkoutMap from './WorkoutMap'
import List from './List'
import Form from './Form'

const Main = (props) => (

    <main>
        <Switch>
            <Route exact path='/map' component={WorkoutMap} data={props.data}/>
            <Route exact path='/list' component={List}/>
            <Route exact path='/form' component={Form}/>
        </Switch>
        <h1>Workout Tracker</h1>

    </main>

)   

export default Main