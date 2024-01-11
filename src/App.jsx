import HomePage from './components/pages/HomePage'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Shop from './components/pages/Shop'
import CarShop from './components/pages/CarShop'
import Conocenos from './components/pages/Conocenos'
import FQA from './components/pages/FQA'
import NavBar from './components/NavBar'
import SingIn from './components/pages/signIn'
import SingUp from './components/pages/SingUp'
import Footer from './components/Footer'

function App() {
  return (
      <BrowserRouter>
            <NavBar/>
              <Routes>
                 <Route path="/" exact element={<HomePage/>}/>
                  <Route path="/Shop" exact element={<Shop/>}/>
                  <Route path="/CarShop" element={<CarShop/>}/>
                  <Route path="/Conocenos" element={<Conocenos/>}/>
                  <Route path="/Questions" element={<FQA/>}/>
                  <Route path="/SingIn" element={<SingIn/>}/>
                  <Route path="/Login" element={<SingUp/>}/>
              </Routes> 
           <Footer/>
      </BrowserRouter>
  )
}

export default App
