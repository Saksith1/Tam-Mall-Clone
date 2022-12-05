import React from 'react'

function SearchBar() {
    return (
        <div className='search-bar'>
            <label className='drop-down'>
                <span>All Categoies</span>
                <i class="las la-angle-down"></i>
                <ul className='drop-list'>
                    <li>
                        Accessories
                    </li>
                    <li>
                        Accessories
                    </li>
                    <li>
                        Accessories
                    </li>
                    <li>
                        Accessories
                    </li>
                    <li>
                        Accessories
                    </li>
                    <li>
                        Accessories
                    </li>
                </ul>
            </label>
            <input type="text" placeholder='Search...'></input>
            <i class="las la-search search-icon"></i>
        </div>
    )
}

export default SearchBar
