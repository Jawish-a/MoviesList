import React from "react";

function WatchList(props) {
  const movies = props.watchlist.map(movie => {
    console.log(movie);
    return (
      <div>
        <p>{movie}</p>
        <button onClick={() => props.moveToWatched(movie)}>Watched</button>
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
      <p>Watchlist: {movies.length}</p>
      {movies}
    </div>
  );
}

export default WatchList;
