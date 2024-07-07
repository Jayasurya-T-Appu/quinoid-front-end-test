import React, { useEffect, useState } from 'react'
import "./result_style.css"
import CircularPrograssBar from '../../components/CircularProgressBarComponent/CircularPrograssBar';
import Button from '../../components/ButtonComponent/Button';
import {useAuth} from "../../Utils/AuthContext"
import { useNavigate  } from 'react-router-dom';
const Result = ({correctAnswer, answers}) => {
    const [timeTaken, setTimeTaken] = useState(0)
    const [note, setNote] = useState("")
    const navigate = useNavigate()
    const [wrong, setWrong] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [skipped, setSkipped] = useState(0)

    const {logout} = useAuth()


    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const time_taken = formatTime(localStorage.getItem("total_time"))
        const note = localStorage.getItem("note")
        setNote(note)
        setTimeTaken(time_taken)

        if(answers && correctAnswer){
            let skippedCount = 0;
            let correct = 0;
            let wrong = 0;
            answers.forEach((answer, index)=>{
                if(!answer){
                    skippedCount++;
                    
                }
                else{
            
                    if(answer === correctAnswer[index]){
                        correct++
                    }else{
                        wrong++
                    }

                }
            })
            setSkipped(skippedCount)
            setCorrect(correct)
            setWrong(wrong)
            
        }
        
    }, [])

    const convertPercentage = (number, total_number) =>{
        return (number/total_number) * 100
    }

   

    const handleExit = () =>{
        logout()
        navigate('/')
    }

    return (
        
        <>
        {correctAnswer && answers && (
            <div className='result__container'>
            <div className='result__wrapper'>

                <div className='result_analytics_container'>
                    <div className="result__score">
                        <p>Score: <span className='bold'>{correct*13}/</span>  400</p>
                        <p>Time Taken : <span className='bold'>{timeTaken ? timeTaken : ""}</span> </p>
                        <p className='result__percentage'>{convertPercentage(correct*13, 400)}%</p>
                        <p style={{ color: "#2B7DF7", fontSize: "16px", fontWeight: 500 }}>Total Score</p>

                    </div>
                    
                    <div className="result__analytics">
                        <CircularPrograssBar data={convertPercentage(correct*13, 400)} percentage={`${correct*13}`} text={"Final Score"} />
                        <CircularPrograssBar data={convertPercentage(correct,30)} percentage={correct}  text={"Correct"} />
                        <CircularPrograssBar data={convertPercentage(wrong,30)} percentage={wrong} text={"Wrong"} />
                        <CircularPrograssBar data={convertPercentage(skipped, 30)} percentage={skipped} text={"Skipped"} />

                    </div>
                </div>
                <div className="result__scribble_container">
                    <p className='result__scribble_heading'>Your scribble notes:</p>
                    <div className='result__note'>
                    <p style={{ overflowWrap: "break-word", wordWrap: "break-word", wordBreak: "break-word" }}>{note}</p>
                    </div>

                </div>
                <div className='result__button'>
            <Button text={"Exit"}  border={false} clickFunction={handleExit}/>
            </div>
            </div>
            
          
        </div>
        )}
        
        </>
        
    )
}


export default Result