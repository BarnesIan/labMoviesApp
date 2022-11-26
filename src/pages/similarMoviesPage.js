import React from "react"
import PageTemplate from "../components/templateMovieListPage";
import { getSimilarMovie } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner"
import AddToMustWatch from "../components/cardIcons/addToMustWatch";
import { useParams } from 'react-router-dom';

// const SimilarMoviesPage = (props) => {
//     const { id } = useParams();

const SimilarMoviesPage = (props) => {
  const { id } = useParams();
  const {  data: similar, error, isLoading, isError }  = useQuery(
  ["similar", { id: id }],
  getSimilarMovie
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = similar.results;
  // Redundant, but necessary to avoid app crashing.
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  
  return (
    
     <PageTemplate 
       title="Similar Movies"
       movies={movies}
       action={(movie) => {
         return <AddToMustWatch movie={movie}/>
    }}
    />
  );
};

export default SimilarMoviesPage;