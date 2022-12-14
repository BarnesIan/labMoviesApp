import React from "react"
import PageTemplate from "../components/templateActorsListPage";
import { getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner"
import AddToFavouritesIcon from '../components/cardIcons/addToActorFavourites'

const ActorsPage = (props) => {
    const {  data, error, isLoading, isError }  = useQuery('actors', getActors)
  
    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
  
    const actors = data.results;

      // Redundant, but necessary to avoid app crashing.
  const favourites = actors.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
    return (
    
        <PageTemplate 
          title="Actors"
          actors={actors}
          action={(actor) => {
            return <AddToFavouritesIcon actor={actor} />
          }}
       />
     );
    
}

export default ActorsPage;