import React, { useEffect, useState } from 'react'
import "./test_style.css"
import jsonData from '../../data/sampleData.json'
import { useParams } from 'react-router-dom';
import Timer from '../../components/TimerComponent/Timer';
import Header from '../../components/HeaderComponent/Header';
import Footer from '../../components/FooterComponent/Footer';
import TestComponent from '../../components/TestComponent/TestComponent';
import Result from '../ResultPage/Result';
const Test = () => {
    const { category } = useParams();
    const [answers, SetAnswers] = useState(Array.from({ length: 30 }).fill(null))
    const [scribble, setScribble] = useState("")
    const [testStatus, setTestStatus] = useState(true)
    const [correctAnswer,setCorrectAnswer] = useState([])
    const [questions,setQuestions] = useState([])

/* eslint-disable react-hooks/exhaustive-deps */
    useEffect(()=>{
        let data = jsonData.filter(obj => obj.category === category)
        data = data.slice(0, 30)
        setQuestions(data)
        let temp_answer = []
        data.forEach((obj)=>{
            temp_answer.push(obj.correct_option)
        })
        setCorrectAnswer(temp_answer)
 
    },[])
    return (
        <div className='test__container'>
            <Header category={category}  setTestStatus = {setTestStatus}/>
            {testStatus?
            <Timer 
            setTestStatus={setTestStatus}  
            answers={answers} 
            scribble={scribble}/>

            :""}

            {
                testStatus? 
                <TestComponent 
                data={questions}
                answers={answers} 
                SetAnswers={SetAnswers}
                setScribble={setScribble}
                setTestStatus = {setTestStatus}/>:
                <Result correctAnswer = {correctAnswer} answers={answers}/>
            }
         
            
            <Footer/>
        </div>
    )
}

export default Test