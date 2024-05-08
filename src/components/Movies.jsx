import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Verticalcards from './partials/Verticalcards';

const Movies = () => {

    const [movies, setmovies] = useState(null);
    

    const getmoveis = async ()=>{
        try {
    
          const {data} = await axios.get("/discover/movie")
          setmovies(data.results)
          
          console.log(data)
          
        } catch (error) {
          console.log("error:", error)
          
        }
      }


      useEffect(() => {
         getmoveis();
      },[])


    
      return movies && (
        <div className='w-screen h-screen ' >
           <div className='w-full h-20[vh] flex justify-between items-center p-5 '>
            <h1 className='text-xl text-zinc-300 px-[5%] font-semibold'>Movie</h1>
            <Topnav/>
           </div>
           <InfiniteScroll
           dataLength={movies.length}
           next={getmoveis}
           hasMore={true}
           loader={<h1>Loading..</h1>}
           >
           <Verticalcards data = {movies} title="movie"/>
           </InfiniteScroll>
           
          
        </div>
      )
}

export default Movies
