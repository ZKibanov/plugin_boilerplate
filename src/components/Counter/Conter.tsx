import React, {useState} from "react";
import './Counter.scss'

export const Counter:React.FC = () => {
    const [number, setNumber] = useState<number>(0)
    return (
        <div className="container">
        <div className="number">{number}</div>
  
        <button 
        className="btn"
          onClick={() => setNumber(prev => prev+1)}
        >
          увеличить счетчик
        </button>
      </div>
    )
}