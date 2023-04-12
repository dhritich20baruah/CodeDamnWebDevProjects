import React, {useContext} from 'react'
import '../App.css'
import {GameStateContext} from '../helper/Context'


function Menu(){
    const {gameState, setGameState, userName, setUserName} = useContext(GameStateContext)
    return(
        <>
        <div className="Menu">
        <label> Enter Your Name</label>
        <input type="text" placeholder="ex. name" onChange={(e)=>{
            setUserName(e.target.value)
        }}/>
        <button onClick={()=>{
            setGameState("playing")
        }}>Start Quiz</button>
        </div>
        </>
    )
}

export default Menu
