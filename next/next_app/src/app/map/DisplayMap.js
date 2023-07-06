"use client"
import React, {useRef, useState} from 'react'
import mapboxgl from 'mapbox-gl'
import ReactMapGL, {Marker, Popup, ViewState} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const DisplayMap = () => {

    // const mapContainer = useRef(null)
    const mapRef = useRef(null)
    const [viewPort, setViewPort] = useState({
        latitude: 43,
        longitude: -79,
        zoom: 10
    })
    // useEffect(()=>{

    //     mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? ''
    //     map.current = new mapboxgl.Map({
    //         container: mapContainer.current,
    //         style: 'mapbox://styles/mapbox/light-v10',
    //         center: [15.4542, 18.7322], // center map on Chad
    //         zoom: 1.8
    //     })
    // }, [])

  return (
    <main>
       <ReactMapGL {...viewPort} width="100%" height="100%" mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}></ReactMapGL>
    </main>
  )
}

export default DisplayMap