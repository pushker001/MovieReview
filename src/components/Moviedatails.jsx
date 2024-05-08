import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { asyncloadmovie } from '../store/actions/movieAction';
import { Outlet, useParams} from "react-router-dom"
import { removemovie } from '../store/reducer/movieSlice';
import Card from './partials/Card'


const Moviedatails = () => {
 

  const {id} = useParams();

  const {info} = useSelector((state) => state.movie)

  const dispatch = useDispatch()
  console.log(info)
 
 useEffect(()=> {
  dispatch(asyncloadmovie(id))

  return () =>{
    dispatch(removemovie())
  }
  
 },[])

  



  return info ? (
    <div className='w-screen h-[140vh] px-[10%] relative' style={{
      background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,

      backgroundPosition: 'center',
      backgroundSize: 'cover'

    }}> 
      <nav className='text-zinc-100 h-[10vh] flex items-center gap-10 text-2xl'>
      <a href={info.detail.homepage} target='_blank'><i class="ri-home-4-line"></i></a>
        <a href= {`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} target='_blank' ><i class="ri-earth-fill"></i></a>
        <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>Imdb</a>
      </nav>

      <div className='w-full flex text-white'>
      <img className='h-[60vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]' src= {`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path }`} />

      <div>
        <div className='flex gap-2'>
          <h1 className='text-white text-7xl ml-10'>{info.detail.name || info.detail.tittle || info.detail.original_name || info.detail.original_title}</h1>
          <small className='text-xl font-bold text-zinc-200'>
            ({info.detail.release_date.split("-")[0]})

          </small>

        </div>
        <div className='ml-10 mt-5 text-2xl flex items-center '>
          <spna className="rounded-full text-xl font-semibold bg-yellow-600 text-white w-[8vh] h-[8vh] flex justify-center items-center" >{(info.detail.vote_average * 10).toFixed()}{" "}<sup>%</sup></spna>
          <h1 className='ml-5'>{info.detail.release_date}</h1>
          <h1 className='ml-5'>{info.detail.genres.map((g)=> g.name).join(",")}</h1>
          <h1 className='ml-5'>{info.detail.runtime}min</h1>
        </div>
        <h1 className='ml-10 mt-5'><b>Tagline: </b>{info.detail.tagline}</h1>
        <div>
        <h1 className='ml-10 mt-3 text-2xl'>Overview</h1>
        <p className='w-[90%] ml-10 mb-6 text-sm'>{info.detail.overview}</p>
        <a href={`https://www.youtube.com/watch?v=${info.videos.key}`} className='ml-10 bg-[#6556CD] p-4 rounded-lg'>Watch Trailer</a>
        </div>
        

      </div>

      </div>

      <Card data={info.similar.results || info.recommendations.results}/>

      <Outlet />

      
        
    </div>
  ) : <h1>Loading..</h1>
}

export default Moviedatails
