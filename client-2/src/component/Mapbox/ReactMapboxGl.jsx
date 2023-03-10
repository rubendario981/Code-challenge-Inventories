import React, { useEffect, useState, useRef } from 'react'
import mapboxgl from "mapbox-gl";
import { Marker } from 'react-map-gl'

function ReactMapboxGl() {
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
      var coordinates = e.lngLat;
      setLat(coordinates.lng.toFixed(4))
      setLng(coordinates.lat.toFixed(4))
      new mapboxgl.Popup().setLngLat(coordinates).setHTML(<Marker latitude={74.1} longitude={4.64}>
        <div className='text-red-600 text-6xl font-bold'>I am heree!!</div>
      </Marker>)
    });
  }, [lat, lng, map, mapContainer])

  return (
    <div className='flex w-full'>
      <div ref={mapContainer} className="w-screen h-screen" ></div>

    </div>
  )
}

export default ReactMapboxGl