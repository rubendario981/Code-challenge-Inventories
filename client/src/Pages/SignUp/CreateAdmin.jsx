import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import SignUp from './SignUp'

const CreateAdmin = () => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  
  useEffect(() => {
    if(user.id && user.role !== "Admin"){
      Swal.fire("Process unavailable", "Only users with role Admin can create anothers users Admin", "error")
      navigate("/login")
    }
  }, [])
  
  return (
    <div>
      <SignUp createAdmin={true}/>
    </div>
  )
}

export default CreateAdmin