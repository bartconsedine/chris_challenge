import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'

const AppNavBar = () => {
    const [toggleValue, setToggleValue] = useState(false)

    const toggle = () => {
        setToggleValue(!toggleValue)
    }
    return (

        <div onClick={() => toggle()}>
            <Navbar color="dark" dark expand="sm" className="mb-2">
                <Container>
                    <NavbarBrand href="/">
                        Workout Tracker
                   </NavbarBrand>
                    <NavbarToggler onClick={() => toggle()} />
                    <Collapse isOpen={toggleValue} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem >
                                <NavLink href="/">
                                    home
                                </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="/form">
                                    Add Workout
                                </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="/list">
                                    Past Workouts
                                </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="http://localhost:5005/graphql">
                                    Graphiql
                                </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="/map">
                                    Workout Map
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Container>

            </Navbar>
            {/* <div className="list">list</div> */}
        </div>

    )
}

export default AppNavBar