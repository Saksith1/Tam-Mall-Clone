import React from 'react'
import logo from '../logo.png'
import '../styles/MiddleBar.css'
import SearchBar from './SearchBar'

function MiddleBar() {
    return (
        <div className='middle-bar container'>
            <a href='#' className='logo'>
                <img src={logo} alt={"logo"}/> 
            </a>
            <SearchBar/>
            <ul className='contact'>
                <li>
                    <a href='#'><i class="lab la-facebook"></i></a>
                </li>
                <li>
                    <a href='#'><i class="lab la-facebook"></i></a>
                </li>
                <li>
                    <a href='#'><i class="lab la-facebook"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default MiddleBar
