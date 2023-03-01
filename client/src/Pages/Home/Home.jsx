import React, { useState } from 'react'
import Map from '../../component/Map/Map'
import MapGl from '../../component/Map/MapGl'

const Home = () => {
  const [data, setData] = useState({lat: "", long: "", zoom: ""})
  const location = (lat, long, zoom) => {
    setData({...data, lat, long, zoom})
  }
  return (
    <div className="flex justify-between gap-5 mx-6 bg-gray-200 h-screen">
      <div className="flex-flex-col bg-blue-200 w-1/3">
        Aca va el formulario....
        al lado tiene que aparecer el mapa
        <p>Longitud {data.lat}</p>
        <p>Latitud {data.long}</p>
        <p>Zoom {data.zoom}</p>
      </div>
      <div className="flex flex-col border border-green-600 w-2/3 h-screen">
        Mapa here!!!
        {/* <Map location={location}/> */}
        <MapGl />
      </div>
    </div>
  )
}

export default Home