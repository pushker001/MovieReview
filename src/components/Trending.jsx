import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import axios from '../utils/axios';
import Verticalcards from './partials/Verticalcards';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {

    const [trending, settrending] = useState(null);
    

    const gettrending = async ()=>{
        try {
    
          const {data} = await axios.get("/trending/all/day")
          settrending(data.results)
          
          console.log(data)
          
        } catch (error) {
          console.log("error:", error)
          
        }
      }

      console.log(trending)

      useEffect(() => {
         gettrending();
      },[])
    




  return trending && (
    <div className='w-screen h-screen ' >
       <div className='w-full h-20[vh] flex justify-between items-center p-5 '>
        <h1 className='text-xl text-zinc-300 px-[5%] font-semibold'>Trending</h1>
        <Topnav />
       </div>
       <InfiniteScroll 
       dataLength={trending.length}
       next={gettrending}
       hasMore={true}
       loader={<h1>Loading..</h1>}
       >
       <Verticalcards data = {trending}/>
       </InfiniteScroll>
       
      
    </div>
  )
}

export default Trending
