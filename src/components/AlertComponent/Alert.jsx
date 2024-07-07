import React from 'react'
import "./alert_style.css"
import warning from "../../assets/images/warning.png"
import { AiOutlineClose } from "react-icons/ai";
import Button from '../ButtonComponent/Button';
import { useAuth } from "../../Utils/AuthContext"
const Alert = ({text, setToggleAlert, toggleAlert, setTestStatus, exit}) => {
  const {logout} = useAuth()
  const handleToggle = () =>{
    setToggleAlert(!toggleAlert)
  }
  const handleContinue = ()=>{
    if(setTestStatus){
      setTestStatus(false)
    }
    if(exit){
      logout()
    }
    
  }
  return (
    <div className="alertbox">
      <AiOutlineClose onClick={handleToggle} size={24} className='closebutton' />
      <img src={warning} alt="warning" />
      <h3>Warning</h3>
      <p>Are you sure, you want to {text} the exam ?</p>
      <Button clickFunction={handleContinue} text={"Continue"} border={true}/>
    </div>
  )
}

export default Alert