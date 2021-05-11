import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
//import '../assets/Navbar.css';

export class NavBar extends Component {
    render() {
        return (
            /* <div className="navbar-container">
                <NavLink className="link-style" to='/Home'>Home</NavLink>
                <NavLink className="link-style" to='/Login'>Login</NavLink>
                <NavLink className="link-style" to='/Game-input'>Game Input</NavLink>
                <NavLink className="link-style" to='/Games'>Games</NavLink>
                <NavLink className="link-style" to='/Players'>Players</NavLink>
            </div> */
            <>
                <AppBar alignContent="flex-end" color="primary" position="static">
                    <Toolbar fullWidth alignContent="space-between">    
                        
                            <Button size="large" variant="text" href="./Home">
                                Home
                            </Button>
                            <Button size="large" variant="text" href="./Login">
                                Login                    
                            </Button>
                            <Button size="large" variant="text" href='./Game-input'>
                                Game Input
                            </Button>
                            <Button size="large" variant="text" href='./Games'>
                                Games
                            </Button>
                            <Button size="large" variant="text" href='./Players'>
                                Players
                            </Button>                      

                    </Toolbar>    
                </AppBar>
            </>
        )
    }
}

export default NavBar
