import Header from '../components/header';
import  { useState, useEffect, useContext } from 'react';
import Search from '../components/Search';
import Action from '../components/Action';
import Romance from '../components/Romance';
import Comedy from '../components/Comedy';
import Footer from '../components/footer';
import Fecth from '../components/Fecth';
import { useNavigate } from 'react-router'
import { Move } from '../Context/move';

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const { setSelectMovie } = useContext(Move)

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

    const navigate = useNavigate()
    
    const handleNavigation = (movie) => {
        console.log(movie)
        navigate(`/detail/${movie.id}`)
        setSelectMovie(movie)
    }
  
  
    return ( 
      <>
      <Header />
      <Fecth movies={movies}/>
      <Search />
      <Action detailPage={handleNavigation}/>
      <Romance>
  
      </Romance>
      <Comedy>
  
      </Comedy>
      <Footer/>
      </>
     
  
      )
}