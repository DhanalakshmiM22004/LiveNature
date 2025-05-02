import {Route,Routes} from "react-router-dom"
import Home from './components/Home';
import Nav from './components/Nav';
import SignIn from './components/signin';
import Pet_friendly_plants from "./components/pet_friendly_plant";
import Air_purifying_plant  from './components/air_purifying';
import Low_light_plant from './components/low-light_plant';
import Footer from './components/footer';
import './App.css'
import SignUp from "./components/signup";

const App=() => {
  return (
    <>
      <div>
        <Nav/>
      </div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/Signup" element={<SignUp/>}/>
      <Route path="/pet_friendly_plant" element={<Pet_friendly_plants/>}/>
      <Route path="/air_purifying_plant" element={<Air_purifying_plant/>}/>
      <Route path="/low_light_plant" element={<Low_light_plant/>}/>
      </Routes>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default App
