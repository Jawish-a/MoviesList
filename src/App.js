import React, { useState } from "react";

//Components
import Input from "./Input.js";
// import WatchList from "./WatchList.js";
// import Watched from "./Watched.js";
import MovieList from "./MovieList";

function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [watched, setWatched] = useState(["The Godfather"]);
  const moveToWatched = m => {
    let newWatchlist = watchlist.filter(movie => movie !== m);
    setWatchlist(newWatchlist);
    setWatched(watched.concat([m]));
  };
  const moveToWatchList = m => {
    let newWatched = watched.filter(movie => movie !== m);
    setWatched(newWatched);
    setWatchlist(watchlist.concat([m]));
  };
  const deleteMovie = m => {
    let newWatched = watched.filter(movie => movie !== m);
    setWatched(newWatched);
    let newWatchlist = watchlist.filter(movie => movie !== m);
    setWatchlist(newWatchlist);
  };
  return (
    <div>
      <Input watchlist={watchlist} setWatchlist={setWatchlist} />
      <MovieList
        list={watchlist}
        move={moveToWatched}
        moveTo="Watched"
        deleteMovie={deleteMovie}
        listType="Watchlist"
      />
      {/* <WatchList
        watchlist={watchlist}
        moveToWatched={moveToWatched}
        deleteMovie={deleteMovie}
      /> */}
      <p>----</p>
      <MovieList
        list={watched}
        move={moveToWatchList}
        moveTo="WatchList"
        deleteMovie={deleteMovie}
        listType="Watched"
      />
      {/* <Watched
        watched={watched}
        moveToWatchList={moveToWatchList}
        deleteMovie={deleteMovie}
      /> */}
    </div>
  );
}

export default App;
