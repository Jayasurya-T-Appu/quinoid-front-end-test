import React from 'react'
import "./CheckBox_style.css"
const CheckBox = ({option, selected, setSelected,handleAnswerFunction}) => {

  const handleCheck = () =>{
    setSelected(option.id)
    handleAnswerFunction(option.id)

  }
  return (
    <div className='checkbox__container' onClick={handleCheck}>
      <div className={selected === option.id ?"checked checkbox__box":"checkbox__box"} ></div>
      <p>{option.value}</p>
    </div>
  )
}

export default CheckBox