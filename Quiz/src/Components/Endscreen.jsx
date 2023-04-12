import React, {useContext} from 'react'
import {Questions} from '../helper/Questions'
import '../App.css'
import {GameStateContext} from '../helper/Context'

function Endscreen(){
    const {setGameState, userName, score, setScore} = useContext(GameStateContext)

    const restartQuiz = () =>{
        setScore(0);
        setGameState("menu")
    }
    return(
        <>
        <div className="Endscreen">
        <h1>Quiz Over</h1>
        <h2>Hello {userName}</h2>
        <h2>Your final score: {score}/{Questions.length}</h2>
        <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
        </>
    )
}

export default Endscreen