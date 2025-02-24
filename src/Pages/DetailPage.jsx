// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Headerp from "../components/Headerp";
import Episode from "../components/Episode";
import Next from "../components/next";
import Footertwo from "../components/Footertwo";

function DetailPage() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movie = sessionStorage.getItem("movie");

    if (movie) {
      setMovie(JSON.parse(movie))
    }
  }, []);

  return (
    <div>
      <Headerp backgroundImage={movie?.backdrop_path || ""} />
      <Episode />
      <Next />
      <Footertwo />
    </div>
  );
}

export default DetailPage;
