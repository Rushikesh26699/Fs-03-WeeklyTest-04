import React from 'react';
import "./Navbar.css"

function Navbar(props) {
    return (
        <div className='navbar'>
            <div className='nav1'>
                <h2>Flex Business Pro</h2>
                <p>Clean and Modern Business Theme</p>
            </div>
            <div className='nav2'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>StyleGuide</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                    
                </ul>
            </div>
        </div>
    );
}

export default Navbar;