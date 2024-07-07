import React, { useState } from 'react'
import "./header_style.css"
import clinical_scholar from "../../assets/images/clinical_scholar_logo.png"
import {FaRegBell, FaSortDown  } from "react-icons/fa";
import Alert from '../AlertComponent/Alert';

const Header = ({category, setTestStatus}) => {
  const [toggleLogout, setToggleLogout] = useState(false)
  const [toggleAlert, setToggleAlert] = useState(false)
  
  return (
    <div className="test__header">
                <img src={clinical_scholar} alt="" />
                <h1 className='test__title'>EXAM CATEGORY: {category.toUpperCase()}</h1>
                <div className="test__menu_options">
                    <FaRegBell color='#626262' size={21} className='test__header_icon'/>
                    <FaSortDown onClick={()=> setToggleLogout(!toggleLogout)} color='#626262' size={21} className='test__header_icon'/>
                    {toggleLogout? <div className='logout'onClick={()=>setToggleAlert(!toggleAlert)}><p>Logout</p></div>: ""}
                   {toggleAlert ? <div className='alert_position'>
                    <Alert 
                    exit={true}
                    text={'exit'}
                    toggleAlert={toggleAlert}
                    setToggleAlert={setToggleAlert}
                    />
                    
                    </div>:""}
                </div>
            </div>
  )
}

export default Header