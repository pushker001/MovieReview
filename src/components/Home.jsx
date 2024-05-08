import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import Sidenav from './partials/Sidenav'
import axios from '../utils/axios';
import Header from './partials/Header';
import Card from './partials/Card';

const Home = () => {

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);

  const getwallpaper = async ()=>{
    try {

      const {data} = await axios.get("https://api.themoviedb.org/3/trending/all/day")
      let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
      
    } catch (error) {
      console.log("error:", error)
      
    }
  }


  const gettrending = async ()=>{
    try {

      const {data} = await axios.get("/trending/all/day")
      settrending(data.results);
      
    } catch (error) {
      console.log("error:", error)
      
    }
  }


  
  useEffect(() => {
    !wallpaper && getwallpaper();
    !trending && gettrending();
  },[])


  return wallpaper && trending? (
    <>
        <Sidenav />
        <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
          <Topnav />
          <Header data = {wallpaper}/>
          <Card data={trending}/>
        </div>
      
    </>
  ) : <h1>Loading</h1>
}

export default Home
