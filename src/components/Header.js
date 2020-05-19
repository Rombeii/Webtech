import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav mr-auto'>
                    <Link to='/'>
                        <li className='nav-item active navbar-brand'>Home</li>
                    </Link>
                    <Link to='/fishermen'>
                        <li className='nav-item active nav-link'>List of fishermen</li>
                    </Link>
                    <Link to='/catches'>
                        <li className='nav-item active nav-link'>List of catches</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Header