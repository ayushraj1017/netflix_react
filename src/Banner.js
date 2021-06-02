import axios from "./axios"
import { useEffect, useState } from "react"
import requests from "./requests"
import {baseurl} from './Row'



const Banner = () => {

const [movie, setMovie] = useState([])

useEffect(()=>{
    async function getMovie(){
        const req=await axios.get(requests.fetchTrending)
        const random=Math.floor(Math.random()*req.data.results.length-1)
        setMovie(req.data.results[random]);
        

    }
    getMovie()
},[])
function truncate(str, max) {
    return str.length > max ? str.substr(0, max-1) + '…' : str;
  }
console.log(movie);

    return (
        <header style={{ 
            backgroundImage: `url(${baseurl}${movie?.poster_path})` ,
           backgroundSize:"cover",
           backgroundPosition:"center center",
          }}
        className="text-white 
        object-contain
        h-1/5
         
         backgroundIMG">

         <div className="banner_contents 
         flex flex-col justify-start
          items-start p-4 pb-80 ">
             

        {/* title  */}
        <h1 className="text-4xl font-bold pt-24 "
        >{movie?.name || movie?.original_title||movie?.title}</h1>
       
        

        {/* buttons  */}
        <div className="pt-2">
        <button className="border cursor-pointer opacity-60 hover:opacity-90
        border-grey-100 px-2 py-1 bg-black mx-1">Play</button>
        <button className="border cursor-pointer opacity-60 hover:opacity-90
         border-grey-100 px-2 py-1 bg-black mx-1">My List+</button>
        </div>

        {/* description   */}
        <p className="pt-2 ">{movie?.overview}</p>

         </div>
        <div className="h-8 w-screen bg-black opacity-20"></div>



            
        </header>
    )
}

export default Banner
