import React from 'react'
import { NavMenu } from './NavbarElements'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <NavMenu>
            <img src={require('../../assets/logo.png')} alt="logo" className="logoImage" />
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About Me</Link>
            </div>
        </NavMenu>
    )
}
