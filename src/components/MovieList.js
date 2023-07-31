import React, { useEffect, useState } from 'react';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch('https://hoblist.com/api/movieList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      }),
    })
      .then((response) => response.json())
      .then((data) => setMovieList(data.result));
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
