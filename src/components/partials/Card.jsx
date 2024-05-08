import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  return (
    <div className='w-full h-[40vh] p-5 '>
        <div className='mb-3'>
            <h1 className='text-2xl text-zinc-400'>Trending</h1>
        </div>
        <div className='w-[100%] flex overflow-x-auto'>
            {data.map((d,i) => (
                <Link 
                
                to={`/${d.media_type}/details/${d.id}`}
                key={i} className='min-w-[15%] mr-5 h-[60vh] overflow-y-hidden'>
                    <img className='w-full h-[50%] object-cover' src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path }`} />
                    <h1 className='w-[70%] text-l text-white font-semibold'>{d.title || d.name || d.orignial_name || d.original_title}</h1>

                    <p className='w-[90%] text-white font-sb text-xs mt-1'>{d.overview.slice(0,100)}...<span
                    className='text-blue-500'>more</span></p>


                </Link>
            ))}
        </div>
      
    </div>
  )
}

export default Card
