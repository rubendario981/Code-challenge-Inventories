import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../Redux/actions/actions'

const Profile = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const exit = () =>{
    dispatch(logout())
    navigate("/login")
  }

  return (
    <div className='flex w-5/6 md:w-2/3 lg:w-1/2 mx-auto h-auto md:h-screen '>
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 my-auto">
        <div className="flex items-center flex-col">
          <img className="w-36 h-36 mb-3 rounded-full shadow-lg" src="https://i.pinimg.com/474x/6e/83/fb/6e83fb2265eaa85531871aa9c1325b37.jpg" alt={user.name} />
          <h3 className="mb-1 text-3xl font-bold text-gray-900 ">{user.name}</h3>
        </div>
        <div className="px-5 w-full mt-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Registred user data</h5>
          <p className='mt-2 text-xl font-bold tracking-tight text-gray-900 '>Full Name</p>
          <p className="mb-3 font-normal text-gray-700">{user.name}</p>
          <p className='mt-2 text-xl font-bold tracking-tight text-gray-900 '>Email</p>
          <p className="mb-3 font-normal text-gray-700">{user.email}</p>
          <p className='mt-2 text-xl font-bold tracking-tight text-gray-900 '>Role</p>
          <p className="mb-3 font-normal text-gray-700">{user.role}</p>
        </div>
        <div className="flex justify-around mt-6 w-full">
          <button onClick={ exit } className='text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Logout</button>
          <Link to={"/"} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Home</Link>
        </div>
      </div>
    </div>

  )
}

export default Profile