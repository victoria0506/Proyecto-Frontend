import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Registro from '../pages/registro'
import Login from "../pages/login"
import Home from "../pages/home"

function routing() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path='/registro' element={<Registro/>}   />
          <Route path='/login' element={<Login/>}   />
          <Route path='/home' element={<Home/>}   />
        </Routes>
      </Router>
      
    </div>
  )

}

export default routing