import {React,useContext} from "react";
import { getMovies,getMoviesProviders } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites' 
import { MoviesContext  } from "../contexts/moviesContext";
import { useParams } from "react-router-dom";
const HomePage = (props) => {

  const {pageNum} = useContext(MoviesContext);
  const {pageNumber} = useParams();
  const {  data, error, isLoading, isError }  = useQuery(['discover',{pageNum:pageNum}], getMovies)
  const {data: providersData, isLoading:providersLoading} =useQuery('providers',() => getMoviesProviders(props.providerFilter))
  
  // setPageNumber(pageNumber);
  console.log("pageNumber" + pageNumber)

  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
 

  //Redundant, but necessary to avoid app crashing.
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  return (
    <>
    <PageTemplate
    title="Discover Movies"
    movies={movies}
    action={(movie) => {
      return <AddToFavouritesIcon movie={movie} />
    }}
  />
        </>
);
};
export default HomePage;