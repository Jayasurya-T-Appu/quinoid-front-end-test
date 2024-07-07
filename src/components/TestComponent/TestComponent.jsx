import React, { useEffect, useState } from 'react'
import "./TestComponent_style.css"
import Question from '../../components/QuestionComponent/Question';
import Button from '../../components/ButtonComponent/Button'
import Alert from '../AlertComponent/Alert';
const TestComponent = ({  data, answers, SetAnswers, setScribble,setTestStatus}) => {
   
    const [category_questions, SetCategoryQuestions] = useState(null)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [toggleAlert, setToggleAlert] = useState(false)
    

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        if(data){
            SetCategoryQuestions(data)
        }
 
    }, [data])

    const handleNext = () =>{
        setQuestionNumber(questionNumber + 1)
    }
    const handleBack= ()=>{
        if (questionNumber>0){
            setQuestionNumber(questionNumber-1)
        }
    }

    const handleSubmit = () =>{
        if(!toggleAlert){
            setToggleAlert(true)

        }

     

    }
    const handleAnswer = (selectedid) =>{
        const newAnswer = [...answers]
        newAnswer[questionNumber] = selectedid
        SetAnswers(newAnswer)
       

    }

  return (
    <div className='test__main_wrapper'>
        {
            toggleAlert ?
            <div className='alert_position'>
                <Alert text={"submit"} 
            setToggleAlert={setToggleAlert} 
            toggleAlert={toggleAlert}
            setTestStatus= {setTestStatus}
            />
            </div>
            :""
        }
       
                <div className="test__question_container">
                    {
                        category_questions ? 
                        <Question 
                        question={category_questions[questionNumber]} 
                        questionNumber={questionNumber} 
                        handleAnswerFunction = {handleAnswer}/> : ""

                    }
                    <div className="test__button_group">
                        <div style={{ marginRight: "30px", width: "30%" }}><Button text={'Back'} clickFunction={handleBack} border={false} /></div>
                    {
                        questionNumber === 29 ?<div style={{ marginRight: "30px", width: "30%" }}>
                            <Button clickFunction={handleSubmit} text={'Submit'} border={true} />
                            </div> :<div style={{ marginRight: "30px", width: "30%" }}>
                                <Button clickFunction={handleNext} text={'Next'} border={true} /></div>
                        
                    }
                        

                    </div>
                </div>

                <div className='test__notepad_container'>
                    <p>Notepad</p>
                    <textarea onChange={(e)=>setScribble(e.target.value)} className='test__notepad' name="notepad" placeholder='Scribble your notes here ...'></textarea>
                </div>

            </div>
  )
}

export default TestComponent