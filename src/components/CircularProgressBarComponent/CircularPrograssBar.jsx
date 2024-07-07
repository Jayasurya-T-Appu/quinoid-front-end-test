import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularPrograssBar = ({data,percentage, text}) => {
  return (
    <div style={{ width: '100px', height: '100px', marginRight:"50px" }}>
      <CircularProgressbar
        value={data}
        text={`${percentage ? percentage : data}`}
        styles={buildStyles({
          pathColor: '#007bff',
          textColor: '#007bff',
          trailColor: '#d6d6d6',
          textSize: '24px'
        })}
      />
      <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', color: '#555' }}>
        {text}
      </div>
    </div>
  )
}

export default CircularPrograssBar