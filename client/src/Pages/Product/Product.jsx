import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { getRecordsById } from '../../Redux/actions/actions'
import MapGl from '../../component/Map/MapGl'

const Product = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const listActives = useSelector(state => state.listActivesUser)

  useEffect(() => {
    if (user.id) {
      dispatch(getRecordsById(user.id))
    }
  }, [user])

  return (
    <div className='flex flex-col lg:flex-row gap-5 h-screen '>
      <div className="w-11/12 lg:w-1/2 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 my-auto">
        <h3 className='text-xl text-center mb-3 font-bold leading-none text-gray-900'>List of records</h3>
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase border-b border-t bg-blue-300">
            <tr>
              <th scope="col" className="py-3 px-2">
                No
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Type
              </th>
              <th scope="col" className="py-3 px-6">
                Description
              </th>
              <th scope="col" className="py-3 px-6">
                Image thumb
              </th>
            </tr>
          </thead>
          {listActives.map((el, i) => (
            <tbody key={i}>
              <tr className="bg-white border-b">
                <th scope="row" className="py-4 px-2 text-gray-900">
                  {i + 1}
                </th>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  {el.name}
                </th>
                <td className="py-4 px-6">
                  {el.type}
                </td>
                <td className="py-4 px-6">
                  {el.description}
                </td>
                <td className="py-4 px-6 text-center">
                  <img src={el.img} className="w-12" alt={el.name} />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="w-11/12 lg:w-1/2 mx-auto h-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 my-auto">
        <h3 className='text-xl text-center mb-3 font-bold leading-none text-gray-900'>Location inventories</h3>
        <MapGl locations={listActives}/>      
      </div>
    </div>
  )
}

export default Product