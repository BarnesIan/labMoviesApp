import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { getMovieCast } from "../api/tmdb-api";
import MovieCast from "../components/movieCast";
import Grid from "@mui/material/Grid";
import CastTemplate from "../components/templateMovieCast";

const MovieDetailsPage = (props) => {
  const { id } = useParams();
  // const { data: cast } = useQuery(
  //   ["cast", { id: id }],
  //   getMovieCast);

  const { data:movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
 // const actors = cast
  //console.log(cast.cast)
  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <Grid>
   <CastTemplate movie = {movie} />
      </Grid>
          </PageTemplate>
    
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    
    </>
  );
};

export default MovieDetailsPage;