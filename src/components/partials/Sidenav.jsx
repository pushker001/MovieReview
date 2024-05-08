import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-8'>
      <h1 className='text-2xl font-bold'> 
        <i class=" text-[#6556CD] ri-tv-fill " ></i>
        <span className='text-2xl text-white ml-1'>Refli</span>
      </h1>
      <nav className='text-zinc-400 flex flex-col '>
        <h1 className='mt-10 mb-5 text-white text-semibold'>New Feed</h1>
        <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white p-4 duraion-300 rounded-lg'>
        <i class="ri-fire-fill"></i>
          Trending
          </Link>
        <Link to="/popular" className='hover:bg-[#6556CD] hover:text-white p-4 duraion-300 rounded-lg'>
          
          < i class="ri-bard-fill mr-2"></i>
          Popular 
          </Link>
        <Link to="/movie" className='hover:bg-[#6556CD] hover:text-white p-4 duraion-300 rounded-lg'>
         <i class="ri-tv-fill mr-2"></i>
          Movies
          </Link>
        <Link to="/tvshows" className='hover:bg-[#6556CD] hover:text-white p-4 duraion-300 rounded-lg'>
          <i class="ri-movie-line mr-2"></i>
          Tv Shows
          </Link>
        <Link to="/people" className='hover:bg-[#6556CD] hover:text-white p-4 duraion-300 rounded-lg'>
          <i class="ri-group-fill mr-2"></i>
          People
          </Link> 
      </nav>
     

        
      
    </div>
  )
}

export default Sidenav
