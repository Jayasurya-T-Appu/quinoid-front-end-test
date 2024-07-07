import React, { useState } from 'react'

const Button = ({ text, clickFunction, border }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyle = {
    backgroundColor: isHovered ? "#1B6DF7" : "#2B7DF7",
    height: "48px",
    color: "white",
    fontSize: "1.2rem",
    width: '100%',
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    margin: "10px 0px",
    cursor: "pointer",
    transition: "background-color 0.3s"

  }
  const buttonStyleBorder = {
    border: "1px solid #2B7DF7",
    height: "48px",
    color: isHovered ? "white" : "#2B7DF7",
    backgroundColor: isHovered ? "#2B7DF7" : "white",
    fontSize: "1.2rem",
    width: '100%',
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    margin: "10px 0px"
  }
  return (
    <>
      <button onClick={clickFunction}
        type='button'
        style={border ? buttonStyle : buttonStyleBorder}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >{text}</button>
    </>
  )
}

export default Button