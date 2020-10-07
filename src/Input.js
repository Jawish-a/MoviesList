import React, { useState } from "react";

function Input(props) {
  const [newMovie, setNewMovie] = useState("");
  const handleClick = () => {
    console.log("clicked");
    // let newWatchlist = props.watchlist;
    // const newlist = newWatchlist.concat(newMovie);
    // props.setWatchlist(newlist);

    props.setWatchlist([...props.watchlist, newMovie]);
  };
  const handleChange = event => {
    setNewMovie(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>+ Add</button>
    </div>
  );
}

export default Input;
