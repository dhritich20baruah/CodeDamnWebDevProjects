"use client"
import React, {useState} from 'react'

const Exp = () => {
    const [count, setCount] = useState(1)

    function increment(){
        setCount(count => count + 1)
    }

    
    function decrement(){
        setCount(count => count - 1)
    }
  return (
    <div>
        <p>{count}</p>
        <div>
            <button className="border-2 border-black p-1" onClick={increment}>+</button>
            <button className="border-2 border-black p-1" onClick={decrement}>-</button>
        </div>
    </div>
  )
}

export default Exp