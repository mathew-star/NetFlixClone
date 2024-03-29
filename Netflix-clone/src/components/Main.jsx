import React, { useEffect, useState } from 'react'
import requests from '../request'
import axios from 'axios'

function Main() {
    const [movies,setMovies]= useState([])
    const movie = movies[ Math.floor(Math.random() * movies.length) ]
    useEffect(()=>{
       axios.get(requests.requestPopular)
       .then((res)=>{
        setMovies(res.data.results)
       })

    },[])
    // console.log(movie)
    const truncateString=(string , num ) =>{

        if (string.length > num){return string.slice(0,num)+"..."}
        else{
            return string
        }
    }


  return (
    <div className='w-full h-[550px] text-white'>
        <div className=' w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black '></div>

        {movie && (
            <>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie.title}</h1>
                <div className='my-4'>
                    <button className='border bg-gray-300 text-black py-2 px-5'>Play</button>
                    <button className='border  text-white ml-4 py-2 px-5'>Watch later</button>
                </div>
                <p className='text-gray-300 text-sm'>Released : {movie.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview,150)}</p>
                </div>
            </>
            )}

            
        </div>
      
    </div>
  )
}

export default Main
