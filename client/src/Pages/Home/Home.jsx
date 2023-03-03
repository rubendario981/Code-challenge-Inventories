import React, { useEffect, useState, useRef } from 'react'
import mapboxgl from "mapbox-gl";
import TextArea from '../../component/CustomTextArea/TextArea';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { createActive } from '../../Redux/actions/actions';
import { Marker } from 'react-map-gl'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

const Home = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [showMap, setShowMap] = useState(false)
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(-74.1);
  const [lng, setLng] = useState(4.64);
  const zoom = 8;

  useEffect(() => {
    !user.id && (
      Swal.fire("Please login in the page", "For make a record you must be logged in the page", "info"),
      navigate("/login")
    )
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lat, lng],
      zoom: zoom,
    });
  }, [user])

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
    <div className='flex mx-auto md:h-screen '>
      <div className={showMap ? "absolute left-28 w-5/6 h-3/4 bg-white border border-gray-200 rounded-lg shadow" : "hidden"}>
        <h3 className="text-center bg-gray-700 text-white text-2xl py-4">Select location of product</h3>
        <div className="relative">
          <div className='w-full h-96 text-center'>
            <div ref={mapContainer} className="w-full h-full" />
            <div className="flex justify-center mt-20">
              <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-3.5 mr-2 mb-2' onClick={() => setShowMap(false)}>Confirm and close</button>
            </div>
          </div>
        </div>
      </div>

      <Formik enableReinitialize={true}
        initialValues={{ userId: user.id, name: '', type: '', description: '', lat: lat, lng: lng }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = "Object name is required"
          }
          if (!values.type) {
            errors.type = 'Please select an option';
          }
          if (!values.lat || !values.lng) {
            errors.coords = "Object location is required"
          }
          if (!values.description) {
            errors.description = "Object description is required"
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const response = await dispatch(createActive(values))
          if (response.status === 200) {
            Swal.fire("Product created", "Product created successfully", "success")
            navigate("/product")
          }
          else Swal.fire("Cannot be create product", "", "info")
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <div className="w-11/12 sm:w-5/6 md:w-9/12 lg:w-7/12 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8 my-8 md:my-auto">
            <Form className='space-y-6'>
              <h5 className="text-3xl font-bold text-gray-900 text-center">Register product</h5>
              <div>
                <label htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Name
                </label>
                <Field type="text" name="name"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                <ErrorMessage name="name" className='text-sm font-semibold text-red-600' component="div" />
              </div>
              <div>
                <label htmlFor="type"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Type object
                </label>
                <Field as="select" name="type" className="border bg-white border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                  <option defaultValue hidden>Select... </option>
                  <option value="Engines">Engine</option>
                  <option value="Pipes">Pipes</option>
                  <option value="Lights">Lights</option>
                </Field>
                <ErrorMessage name="type" className='text-sm font-semibold text-red-600' component="div" />
              </div>
              <div>
                <label htmlFor="coords"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Coords location <small className='font-light text-gray-600'>(latitude and longitude)</small>
                </label>
                <div className='flex'>
                  <Field type="text" name="lat" onFocus={() => setShowMap(true)}
                    className="border border-gray-300 border-r-0 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                  <Field type="text" name="lng" onFocus={() => setShowMap(true)}
                    className="border border-gray-300 border-l-0 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <ErrorMessage name="coords" className='text-sm font-semibold text-red-600' component="div" />
              </div>
              <div>
                <label htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Description object
                </label>
                <TextArea id="description" name='description' rows="4" placeholder="Description object..."></TextArea>
                <ErrorMessage name="description" className='text-sm font-semibold text-red-600' component="div" />
              </div>

              <div className='flex justify-around'>
                <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center mr-2 mb-2' type="submit" disabled={isSubmitting}>
                  Create
                </button>
                <button className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-sm px-12 py-2.5 text-center mr-2 mb-2' type="reset">
                  Clear form
                </button>
              </div>
              {/* <div className='flex flex-col items-center'>
                <h4>Do you have any account already?</h4>
                <Link to={"/login"} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"> Login page here!!</Link>
              </div> */}
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Home
