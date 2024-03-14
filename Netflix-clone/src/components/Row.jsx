import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import Movie from './Movie';
import '../index.css'


function Row({title, fetchURL,rowId}) {
  const [movies,setMovies]= useState([])
  const [like ,setLike] = useState(false)
  useEffect(()=>{
    axios.get(fetchURL)
    .then((res)=>{
     setMovies(res.data.results)
    })

 },[fetchURL])
//  console.log(movies)
  const slideLeft=()=>{
    console.log('left')
    var slider=document.getElementById('slider'+ rowId)
    slider.scrollLeft=slider.scrollLeft - 500;
  }
  const slideRight=()=>{
    console.log('right')

    var slider=document.getElementById('slider'+rowId)
    slider.scrollLeft=slider.scrollLeft + 500;
  }
  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-r'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft  onClick={slideLeft} 
        className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block' size={40}/>
        <div className='w-full h-full  overflow-x-scroll scroll-smooth whitespace-nowrap no-scrollbar' id={'slider'+rowId}  >
          {movies.map((item,id)=>( 
              <Movie key={id} item={item}/>
          ))}
        </div>
        <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block ' size={40}/>
      </div>
    </>
  )
} 

export default Row
