import React from 'react'
import { Link } from 'react-router-dom'

const Verticalcards = ({data, title}) => {
  return (
    <div className='flex flex-wrap w-[full] px-10 bg-[#1F1E24]'>
       {data.map((d,i) => (
        <Link 
        to={`/${title}/details/${d.id}`}
        key={i} className='w-[30vh] mr-[5%] mb-[5%]'>
          <img className='h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]' src= {`https://image.tmdb.org/t/p/original/${d.poster_path || d.backdrop_path || d.profile_path }`} />

          <h1 className='text-white font-semibold mt-2 text-xl '>{d.name || d.tittle || d.original_name || d.original_title}</h1>
          

        
        </Link>
        
         
       ))}
        
      
    </div>
  )
}

export default Verticalcards
