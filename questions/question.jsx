import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	// add a state variable here
    const [infos, setInfos] = useState()
    const [sym, setSym] = useState(['+' , '-'])

    function toggleVisible(arg){
        if(arg == true){
            setInfos(info) 
            setSym('-')
        }
    }
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
				<button className="btn" onClick={()=>{toggleVisible(true)}}>{sym[0]}</button>
			</header>
			{/* make this render conditionally */}
			<p>{infos}</p>
		</article>
	)
}

export default Question
