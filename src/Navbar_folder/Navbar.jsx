//import React, { Component } from 'react';
//import { MenuItems } from "./MenuItems"
import React from 'react'
import './Navbar.css'
import { Outlet, Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <nav className="NavbarItems">
            <h1 className="devlink">DevLink Marketplace</h1>
            
                <ul id="navbar">
                    
                    <li><Link classname='link' to='/'>
                        Find DEV
                    </Link></li>
                    <li><Link classname='link' to='/FindJob'>
                        Find Jobs
                    </Link></li>
                    <li><Link classname='link' to='/login'>
                        Login
                    </Link></li>
                    <li><Link classname='link' to='/CreateAccountPage'>
                        Create Account
                    </Link></li>
                    
                </ul>
                
            </nav>
                <Outlet />
        </div>
    );
}

/*class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="devlink">DevLink Marketplace<i className="fab fa-react"></i></h1>
                <div className="menu-icon">
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}


                </ul>
            </nav>
        )
    }
}*/
export default Navbar