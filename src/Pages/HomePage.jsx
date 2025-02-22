// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Search from "../components/Search";
import Action from "../components/Action";
import Romance from "../components/Romance";
import Comedy from "../components/Comedy";
import Footer from "../components/footer";
import Fecth from "../components/Fecth";
import { useNavigate } from "react-router";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const onNavigate = (movie) => {
    if (movie) {
      sessionStorage.setItem("movie", JSON.stringify(movie));
      navigate("/detail/" + movie.id);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=46c35111faa147ad5c3b9f8442f13655"
        );
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Header />
      <Fecth movies={movies} />
      <Search />
      <Action onNavigate={onNavigate} />
      <Romance onNavigate={onNavigate} />
      <Comedy onNavigate={onNavigate} />
      <Footer />
    </>
  );
}
