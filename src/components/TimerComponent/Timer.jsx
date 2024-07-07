import React, { useEffect, useState } from 'react'
import "./timer_style.css"
const Timer = ({answers,scribble, setTestStatus}) => {
    const initialSeconds = localStorage.getItem('timerSeconds') || 30;
    const [seconds, setSeconds] = useState(parseInt(initialSeconds, 10));
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(()=>{

        if(seconds > 0){
            const intervel = setInterval(()=>{
                setSeconds(preSeconds => {
                    const newSecond = preSeconds - 1
                    localStorage.setItem('timerSeconds', newSecond)
                    return newSecond
                }
                )
            }, 1000)
            return ()=> {
                localStorage.setItem('total_time', 300 - seconds)
                localStorage.setItem('timerSeconds', initialSeconds)
                localStorage.setItem("note", scribble)
                // localStorage.setItem("answers", JSON.stringify(answers));
                
                clearInterval(intervel)    

            }
        }
        else{

            localStorage.setItem('total_time', 300 - seconds)
            localStorage.setItem('timerSeconds', initialSeconds)
            localStorage.setItem("note", scribble)
            localStorage.setItem("answers", JSON.stringify(answers));
            setTestStatus(false)
            
        }
       

    },[seconds])

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      };
    
  return (
    <div className='test__timer'>{formatTime(seconds)}</div>
  )
}

export default Timer