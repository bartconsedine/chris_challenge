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
        console.log(toggleValue)
    }
    return (

        <div onClick={() => toggle()}>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">
                        Workout Tracker
                   </NavbarBrand>
                    <NavbarToggler onClick={() => toggle()} />
                    <Collapse isOpen={toggleValue} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem >
                                <NavLink href="/">
                                    main
                                </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="/form">
                                    Form
                                </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="/list">
                                    List
                                </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="/map">
                                    Map
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