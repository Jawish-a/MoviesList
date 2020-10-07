import React from "react";

function Watched(props) {
  const movies = props.watched.map(movie => {
    console.log(movie);
    return (
      <div>
        <p>{movie}</p>
        <button onClick={() => props.moveToWatchList(movie)}>Watchlist</button>
        <button
          style={{ color: "red" }}
          onClick={() => props.deleteMovie(movie)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div>
      <p>Watched: {movies.length}</p>
      {movies}
    </div>
  );
}

export default Watched;
