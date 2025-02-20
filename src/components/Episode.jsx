
import  { useState, useEffect } from 'react';


function Episode (detailPage){
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
  <h1 className='hh'>Top Searches</h1>
  <div className='mone'>
  
    {
    movies.map((item,index)=>{
      return (
        <>
         
        <div className="move" key={index}>
        <h2 className='him'>{item.title}</h2> {/* Heading level 2 */}
        <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item.backdrop_path}`} alt="" className='item'  onClick={() => detailPage(item)}/>
       
        </div>

        </>

      )

    })

  }
  </div>
  </>
 

  )

}
export default Episode  

  