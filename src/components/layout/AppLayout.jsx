import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

const AppLayout = () => {
  return (
    <>
     <div className="flex min-h-screen">
    <Sidebar/>
    
    <div className="flex-1 flex flex-col">
    <Header/>
    <main className="flex-1 bg-purple-100">
      <Outlet/>
    </main>
    </div>
    </div>
    </>
  )
}

export default AppLayout