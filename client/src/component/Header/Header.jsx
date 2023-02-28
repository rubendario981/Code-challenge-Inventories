import { useSelector } from "react-redux"

const Header = () => {
  const user = useSelector(state => state.user)
  return (
    <div className="bg-blue-500 flex justify-between px-8 py-6 text-white items-center">
      <div className="flex gap-6">
        <img src="https://cdn-icons-png.flaticon.com/512/5351/5351614.png" className="w-12 " alt="icon page" />
        <h3 className="text-2xl mt-2">Inventory team</h3>
      </div>
      
      <div>
        Name user: {user.name ? user.name : "No usuario"}
      </div>
    </div>
  )
}

export default Header