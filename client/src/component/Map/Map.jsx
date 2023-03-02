import React from 'react'
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

const Map = ({ location }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(-74.1);
  const [lng, setLng] = useState(4.64);
  const zoom = 8;
  
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lat, lng],
      zoom: zoom,
    });   
  }, [])

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("click", (e) => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      var coordinates = e.lngLat;
      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML('you clicked here: <br/>' + coordinates)
        
      location(lat, lng)
    });
  }, [lat, lng, map, mapContainer])

  return (
    <div className='relative w-full'>
      <div ref={mapContainer} className="w-full h-screen" />
    </div>
  )
}

export default Map