import './App.css'
import Header from './components/header';
import  { useState, useEffect } from 'react';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=46c35111faa147ad5c3b9f8442f13655')
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results)
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  


  return ( 
    <>
    <Header />
    <h1>Latest and Trending</h1>
    <div className='monero'>
   
      {
      movies.map((item,index)=>{
        return (
          <>
          <div className="movie" key={index}>
          <p className='numbers'>{index+1}</p>
          <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item.backdrop_path}`} alt="" className='image-item' />
         
          </div>

          </>

        )

      })



    }
    </div>
    <div>
      <h1>Top Searches</h1>
    </div>
    </>
   

    )
}

export default App;

