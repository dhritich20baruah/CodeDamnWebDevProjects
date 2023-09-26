import { Inter } from "next/font/google";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl");
import { useState, useEffect, useRef } from "react";
const inter = Inter({ subsets: ["latin"] });
import 'mapbox-gl/dist/mapbox-gl.css'

export default function Home() {
  const [map, setMap] = useState()
  const mapContainerRef = useRef(null);
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN;

  useEffect(()=>{
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [94.9042, 27.4522], // center map on Dibrugarh
      zoom: 3,
    });
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true
    })

    function successLocation(position){
      console.log(position)
    }

    function errorLocation(){}

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
    });

    const navigationControl = new mapboxgl.NavigationControl();
    map.addControl(directions, 'top-left');
    map.addControl(navigationControl, 'top-right');
    return () => map.remove()
  }, [])

  return (
    <main>    
      <div ref={mapContainerRef} className="h-[100vh] w-[100%]"></div>
    </main>
  );
}
