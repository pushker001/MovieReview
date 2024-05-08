import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utils/axios';

const Topnav = () => {

  const [query, setquery] = useState("");
  const [searches, setseraches] = useState([])

  const Getsearches = async () => {
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`);
      setseraches(data.results);
      
    } catch (error) {
      console.log('error: ', error)
      
    }
  }

  useEffect(()=> {
    Getsearches();
  },[query])

 

  




  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center mx-[15%]'>
        <i class=" text-2xl text-zinc-400 ri-search-line"></i>
        <input 
            onChange={(e) => setquery(e.target.value)}
            value={query}
            className='w-[50%] mx-10 p-3 text-zinc-200 border-none outline-none text-zinc-200 bg-transparent'
            type='text' 
            placeholder='Search Here' 
        />
        {query.length > 0 && (<i 
            onClick={()=> setquery("")}
            class=" text-zinc-400 text-2xl ri-close-line"></i>)}

        <div className=' w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[90%] overflow-auto'>
          {searches.map((s, i)=> (
            <Link key={i} className=' flex justify-start items-center w-[100%] border-b-2 border-zinc-100 p-10'>
            <img className='w-[10vh] h-[10vh] rounded object-cover mr-6' src= {`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path }`}  />
            <span>
              {
                s.name || s.tittle || s.original_name || s.original_title
              }
            </span>
          </Link> 
          ))}
        </div>
      
    </div>
  )
}

export default Topnav
