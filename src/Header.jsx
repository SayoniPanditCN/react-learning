import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="Navbar">
            <Link to="/UserList">List</Link>
        </div>
    )
}

export default Header;