import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./components/layout/AppLayout"
import Dashboard from "./pages/Dashboard/Dashboard"
import Profile from "./pages/Profile"
import Tasks from "./pages/Tasks"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>}>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App