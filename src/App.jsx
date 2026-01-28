import { Route, Routes,} from "react-router"
import Home from './Home'
import About from './About'
import Login from './Login'
import Contact from './Contact'
import Categories from './Categories'
import Navbar from "./Navbar"
function App() {
  return(
  <>
  <Navbar></Navbar>
  <Routes>
<Route path="/"element={<Home />} />
<Route path="/about" element ={<About/>}/>
  <Route path="/login" element ={<Login/>}/>
<Route path="/contact" element ={<Contact/>}/>
<Route path="/categories" element ={<Categories/>}/>
  </Routes>
    </>
  )
}

export default App;
