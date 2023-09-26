import React, {useEffect, useState} from 'react'

const About = () => {
    const [info, setInfo] = useState([])

    useEffect(async () => {
      await fetch('/api/hello').then(res=>res.json())
    }, [])
  return (
    <div>
        About
    </div>
  )
}

export default About