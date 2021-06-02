import { useState } from 'react';
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';


function App() {
  
  

  return (
    <div className="bg-black w-full">
    {/* nav   */}
    <Nav/>



    {/* banner  */}
    <Banner/>



    <Row
     title="NETFLIX ORIGINAL"
      fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
