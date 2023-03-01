import React from 'react'
// import Map from 'react-map-gl'
import Map, { Marker, Source, Layer } from 'react-map-gl'


const MapGl = () => {
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [-74.1, 3.64]}},
      {type: 'Feature', geometry: {type: 'Point', coordinates: [-74.1, 5.64]}},
      {type: 'Feature', geometry: {type: 'Point', coordinates: [-74.1, 4.64]}}
    ]
  }
  // [fill, line, symbol, circle, heatmap, fill-extrusion, raster, hillshade, background, sky]
  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#805cbf'
    }
  };

  return (    
    <Map
      initialViewState={{
        longitude: -74.1,
        latitude: 4.64,
        zoom: 8
      }}
      className="w-full h-screen"
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >      
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>      
    </Map>

  )
}

export default MapGl


  // const [viewport, setViewport] = useState({
  //   with: "100vw", height: "100vh", latitude: -74.0, longitude: 4.64, zoom: 12
  // })
// <ReactMapGL
    //   {...viewport}
    //   mapStyle="mapbox://styles/mapbox/streets-v12"
    //   onViewPortChange={(viewport) => setViewport(viewport)}      
    //   mapboxAccessToken='pk.eyJ1IjoicnViZW5kYXJpbzk4MSIsImEiOiJjbGVwMDFnMW8wMGVvNDVvYTg0NXdsaWM4In0.nZCgwMj5ZvmiCc5TGMpSPA'
    // >
    //   <Marker latitude={74.1} longitude={4.64} offsetLeft={-20} offsetTop={-30}>

    //     <div className='text-red-600 text-6xl font-bold'>I am heree!!</div>

    //   </Marker>
    // </ReactMapGL>