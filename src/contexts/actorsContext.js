import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  const [favouriteActor, setFavouriteActor] = useState( [] )
 

  const addToFavouriteActor = (actor) => {
    let newFavourites = [...favouriteActor];
    if (!favouriteActor.includes(actor.id)) {
      newFavourites.push(actor.id);
    }
    setFavouriteActor(newFavourites);
    console.log(newFavourites);
  };

  const removeFromFavouriteActor = (actor) => {
    setFavouriteActor( favouriteActor.filter(
      (mId) => mId !== actor.id
    ) )
  };

  return (
    <ActorsContext.Provider
    value={{
      favouriteActor,
      addToFavouriteActor,
      removeFromFavouriteActor,
    }}
  >
    {props.children}
  </ActorsContext.Provider>
);
};

export default ActorsContextProvider;