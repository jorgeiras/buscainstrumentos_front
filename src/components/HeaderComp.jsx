import React, { useState } from "react"
import InputSearch from "./InputSearch"
import logo from '../assets/buscainstrumentoslogo.png'
import { useNavigate } from 'react-router-dom';


function HeaderComp({setSearchVal}){

    const navigate = useNavigate();

    const handleLogoClick = () => {
        setSearchVal(''); // Reset the search value
        navigate('/items/page/1'); // Navigate to the default endpoint
    };

    return(
        <div className="flex min-h-20 bg-yellow-200 justify-center shadow-md">
            <div className="flex w-11/12  items-center justify-between">
                <img src={logo} onClick={handleLogoClick} alt="logo" className="max-w-80 object-cover object-cover cursor-pointer"/>
                <InputSearch searchVal={setSearchVal}></InputSearch>
            </div>
        </div>
    )
}

export default HeaderComp