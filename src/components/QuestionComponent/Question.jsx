import React, { useState } from 'react'
import "./Question_style.css"
import CheckBox from '../CheckBoxComponent/CheckBox';
const Question = ({question,questionNumber, handleAnswerFunction}) => {


  const [selectedChoise, setSelectedChoise] = useState(null)

  return (
    <>
    {
      question?<>
      <p className='test__question_no'>Question {questionNumber+1} of 30</p>
      <p className='test__question'>{question['question']}</p>
      <div className='test__checkboxes'>
        {question['options'].map(option => {
         return  <CheckBox 
         option = {option} 
         key={option.id} 
         selected= {selectedChoise} 
         setSelected= {setSelectedChoise}
         handleAnswerFunction={handleAnswerFunction}/>
        })
        }

      </div></>:""

    }
      
    </>
  )
}

export default Question