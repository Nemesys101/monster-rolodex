import React from "react";
import './search-box.styles.css'

export const SearchBox = ({ placeholder, handllechange }) => (
    <input className='search' type='search'
        placeholder={placeholder}
        onChange={handllechange}
    />

);