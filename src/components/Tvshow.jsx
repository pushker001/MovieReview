import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Verticalcards from './partials/Verticalcards';
import axios from '../utils/axios';

const Tvshow = () => {

    const [tvshow, settv] = useState(null);
    

    const gettv = async ()=>{
        try {
    
          const {data} = await axios.get("/discover/tv")
          settv(data.results)
          
          console.log(data)
          
        } catch (error) {
          console.log("error:", error)
          
        }
      }

      console.log(tvshow)

      useEffect(() => {
         gettv();
      },[])





      return tvshow && (
        <div className='w-screen h-screen ' >
           <div className='w-full h-20[vh] flex justify-between items-center p-5 '>
            <h1 className='text-xl text-zinc-300 px-[5%] font-semibold'>Movie</h1>
            <Topnav/>
           </div>
           <InfiniteScroll
           dataLength={tvshow.length}
           next={gettv}
           hasMore={true}
           loader={<h1>Loading..</h1>}
           >
           <Verticalcards data = {tvshow} title = "tv" />
           </InfiniteScroll>
           
          
        </div>
      )
}

export default Tvshow
