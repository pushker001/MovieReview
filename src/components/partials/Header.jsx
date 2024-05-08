import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({data}) => {
  return (
    <div style={{
      background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path })`,

      backgroundPosition: 'center',
      backgroundSize: 'cover'

    }}
     
     className='w-[100%] h-[50vh] flex flex-col justify-end p-[3%] '
    
    >  
      <h1 className='text-5xl font-black text-white'>
        {
                data.name || data.tittle || data.original_name || data.original_title
              }</h1>
      <p className='w-[70%] text-white font-sb mt-5'>{data.overview.slice(0,200)}...<Link 
      to={`/${data.media_type}/details/${data.id}`}
      className='text-blue-500'>more</Link></p>
      <p className='text-white mt-5'><i class="text-yellow-400 ri-megaphone-fill"></i>{" "}
      {data.release_date}
      <i class="ml-3 text-yellow-400 ri-album-fill"></i>{data.media_type.toUpperCase()}
         
      </p>
      <Link className='bg-[#6556CD] p-4 w-[20%] mt-4 rounded text-center font-semibold'>Watch Now</Link>
      
    </div>
  )
}

export default Header

