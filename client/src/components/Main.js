import React from 'react'
import {Switch, Route} from 'react-router-dom'
import WorkoutMap from './WorkoutMap'
import Home from './Home'
import List from './List'
import Form from './Form/Form'

const Main = (props) => (

    <main>
        <Switch>
            <Route exact path='/' component={Home} data={props.data}/>
            <Route exact path='/map' component={WorkoutMap} data={props.data}/>
            <Route exact path='/list' component={List}/>
            <Route exact path='/form' component={Form}/>
        </Switch>

    </main>

)   

export default Main