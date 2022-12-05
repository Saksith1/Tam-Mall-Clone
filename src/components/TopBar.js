import '../styles/TopBar.css';
import React from 'react'

function TopBar() {
    return (
        <div className='top-bar'>
            <div className='container'>
                <ul>
                    <li>
                        <a href='#'><i class="las la-phone"></i><span>012/069/093 553 177</span></a>
                    </li>
                    <li>
                        <a href='#'><i class="las la-envelope"></i><span> tammall.official@gmail.com</span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopBar
