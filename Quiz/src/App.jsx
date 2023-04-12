import React,{ useState } from 'react'
import './App.css'
import Menu from './Components/Menu'
import Quiz from './Components/Quiz'
import Endscreen from './Components/Endscreen'
import {GameStateContext} from './helper/Context'

function App() {
    const [gameState, setGameState] = useState("menu")
    const [userName, setUserName] = useState("")
    const [score, setScore] = useState(0)

	return (
		<div className="App">
			<h1> Quiz App</h1>
            <GameStateContext.Provider value={{gameState, setGameState, userName, setUserName, score, setScore}}>
            {gameState === "menu" && <Menu/>}
            {gameState === "playing" && <Quiz/>}  
            {gameState === "finished" && <Endscreen/>}       
            </GameStateContext.Provider>
            
		</div>
	)
}

export default App
