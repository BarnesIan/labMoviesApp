import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState( [] )
  const [mustWatch, setMustWatch] = useState( [] )
  const [pageNum, setPageNum] = useState([])

  const setPageNumber = (num) =>{
    setPageNum(num);
    console.log("PagenumSet"+ num)
  }

  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
    console.log(newFavourites);
  };

  const addToMustWatch = (movie) => {
    let newMustWatch = [...mustWatch];

    if (!mustWatch.includes(movie.id)) {
        newMustWatch.push(movie.id);
    }
    setMustWatch(newMustWatch);
    console.log(newMustWatch);
}

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  
  const removeFromMustWatch = (movie) => {
    setMustWatch( mustWatch.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MoviesContext.Provider
    value={{
      favourites,
      mustWatch,
      setPageNumber,
      pageNum,
      addToFavourites,
      removeFromFavourites,
      addReview,
      addToMustWatch,
      removeFromMustWatch,
    }}
  >
    {props.children}
  </MoviesContext.Provider>
);
};

export default MoviesContextProvider;