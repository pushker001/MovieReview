import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Trending from "./components/Trending"
import Popular from "./components/Popular"
import Movies from "./components/Movies"
import Tvshow from "./components/Tvshow"
import Moviedatails from "./components/Moviedatails"
import Trailer from "./components/partials/Trailer"
import Tvdetails from "./components/Tvdetails"
import People from "./components/People"


function App() {
  

  return (
    <div className='w-screen h-screen bg-[#1F1E24] flex'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element = {<Movies />} />
        <Route path="/movie/details/:id" element={<Moviedatails/>} />
        <Route path="/tvshows" element = {<Tvshow />} />
        <Route path="/tvshows/details/:id" element={<Tvdetails/>} />
        <Route path="/people" element={<People />} />
      </Routes>  
      
    </div>
  )
}

export default App
