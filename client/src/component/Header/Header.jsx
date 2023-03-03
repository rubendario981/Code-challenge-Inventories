import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { identifyUser, getRecordsById } from "../../Redux/actions/actions"

const Header = () => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(identifyUser())    
  }, [])

  return (
    <div className="bg-blue-500 flex justify-between px-8 py-6 text-white items-center">
      <div onClick={() => navigate("/")} className="flex gap-6">
        <img src="https://cdn-icons-png.flaticon.com/512/5351/5351614.png" className="w-12 cursor-pointer " alt="icon page" />
        <h3 className="text-2xl mt-2">Inventory team</h3>
      </div>

      <div>
        {user.name
          ? <div className="flex items-center gap-6">
            <Link className="text-white hover:text-blue-800 hover:bg-white hover:p-3 rounded-lg" to={"/product"}>
              List actives registred
            </Link>
            <Link className="bg-white rounded-full px-1 py-1 mr-1 mb-1" to={"/profile"}>
              <img src="https://i.pinimg.com/474x/6e/83/fb/6e83fb2265eaa85531871aa9c1325b37.jpg" className="border border-white rounded-full w-14 h-14" alt={user.name} />
            </Link>
          </div>
          : <div className="flex gap-6">
            <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" to={"/login"}>
              login
            </Link>
            <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" to={"/signup"}>
              Sign up
            </Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Header