import {Outlet} from "react-router-dom"
import NavBar from "./components/nav-bar/NavBar"

function App() {

  return (
    <div>
      <NavBar/>
      <div style={{padding: "10px"}}>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
