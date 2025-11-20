import React from 'react'

const Header = () => {
    return (
        <div>
            <header>
                <nav className='navbar'>
                    <div className='logo'>StudentSys</div>
                    <div className='nav-links'>
                        <a href='/'>Home</a>
                        <a href='/dashboard'>Dashboard</a>
                        <a href='/students'>Students</a>
                        <a href='/add-student'>Add Student</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
