import axios from "./axios";
import React, { useEffect, useState } from "react";

import Youtube from 'react-youtube'
import movieTralier from 'movie-trailer'

export const baseurl = "https://image.tmdb.org/t/p/original";
const Row = ({ title, fetchUrl,isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)
  const [tralierUrl, settralierUrl] = useState("")

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
      
    }
   
    fetchData();
    setLoading(false)
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick=(movie)=>{
      if(tralierUrl){
          settralierUrl('')
      }
      else{
          movieTralier(movie?.name||movie?.original_title||movie?.title||"")
          .then(url=>{
            settralierUrl(url.slice(url.indexOf("=")+1));

          }).catch(error=>console.log(error))
      }
    
  }
  console.log(tralierUrl);

  if(loading){
  return <h1 className="text-white">Loading....</h1>}

  return (
    <div className="row  ml-6">
     
      <h2 className="font-bold text-white pt-2 pl-4">{title}</h2>
      <div className="row-posters flex 
      overflow-y-hidden 
      overflow-x-scroll
      p-2">
        {movies.map((movie) => {
          return (
          
              <img 
              onClick={()=>handleClick(movie)}
              key={movie.id}
              className={`row-poster  object-contain w-full ${isLargeRow? "max-h-80" :"max-h-36"  }  mx-2 cursor-pointer  `}
                src={`${baseurl}${isLargeRow ? movie.poster_path  : movie.backdrop_path}`}
                alt={movie.name}
               
              />
           
          );
        })}
      </div>

     {tralierUrl && <Youtube videoId={`${tralierUrl}`} opts={opts}/>}
    </div>
  );
};

export default Row;
