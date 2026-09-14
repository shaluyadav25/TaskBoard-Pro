import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
    <div className=" h-20 bg-blue-200 p-5">
      <Link path="/" className="text-2xl p-5 items-center font-bold">Dashboard</Link>
      </div>
    </>
  )
}

export default Header