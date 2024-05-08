import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Verticalcards from './partials/Verticalcards';

const People = () => {


    const [people, setpeople] = useState(null);
    

    const getpeople = async ()=>{
        try {
    
          const {data} = await axios.get("/person/popular")
          setpeople(data.results)
          
          console.log(data)
          
        } catch (error) {
          console.log("error:", error)
          
        }
      }

      useEffect(() => {
        getpeople();
     },[])









    return people && (
        <div className='w-screen h-screen ' >
           <div className='w-full h-20[vh] flex justify-between items-center p-5 '>
            <h1 className='text-xl text-zinc-300 px-[5%] font-semibold'>People</h1>
            <Topnav/>
           </div>
           <InfiniteScroll
           dataLength={people.length}
           next={getpeople}
           hasMore={true}
           loader={<h1>Loading..</h1>}
           >
           <Verticalcards data = {people} title="people"/>
           </InfiniteScroll>
           
          
        </div>
  )
}

export default People
