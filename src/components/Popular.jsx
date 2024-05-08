import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Verticalcards from './partials/Verticalcards';

const Popular = () => {

    const [popular, setpopular] = useState(null);
    

    const getpopular = async ()=>{
        try {
    
          const {data} = await axios.get("/movie/popular")
          setpopular(data.results)
          
          console.log(data)
          
        } catch (error) {
          console.log("error:", error)
          
        }
      }

      console.log(popular)

      useEffect(() => {
         getpopular();
      },[])


  return popular && (
    <div className='w-screen h-screen ' >
       <div className='w-full h-20[vh] flex justify-between items-center p-5 '>
        <h1 className='text-xl text-zinc-300 px-[5%] font-semibold'>Popular</h1>
        <Topnav />
       </div>
       <InfiniteScroll 
       dataLength={popular.length}
       next={getpopular}
       hasMore={true}
       loader={<h1>Loading..</h1>}
       >
       <Verticalcards data = {popular} />
       </InfiniteScroll>
       
      
    </div>
  )
}

export default Popular
