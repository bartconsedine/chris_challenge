import React from 'react'
import {Switch, Route} from 'react-router-dom'
import WorkoutMap from './WorkoutMap'
import List from './List'
import Form from './Form'

const Main = () => (

    <main>
        <Switch>
            <Route exact path='/map' component={WorkoutMap}/>
            <Route exact path='/list' component={List}/>
            <Route exact path='/form' component={Form}/>
        </Switch>

    </main>

)   

export default Main