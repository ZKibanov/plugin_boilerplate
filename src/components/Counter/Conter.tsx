import React, { useEffect, useState } from "react";
import './Counter.scss'

export const Counter: React.FC = () => {
  const [number, setNumber] = useState<number>(0)
  
  // получаем глобальную тему через объект window
  const globalTheme = (window as any).theme || {};

  return (
    <div className="container">
      <div className="number">{number}</div>

      <button
        className="btn"
        style={{ backgroundColor: globalTheme?.secondaryColor ?? undefined, border: `2px solid ${globalTheme?.mainColor || ''}` }}
        onClick={() => setNumber(prev => prev + 1)}
      >
        увеличить счетчик
      </button>
    </div>
  )
}