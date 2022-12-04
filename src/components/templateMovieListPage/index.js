import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import WatchProviders from "../filterMoviesCard/watchProviders";
import SiteFooter from "../siteFooter";
import { Typography } from "@mui/material";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [ providerFilter, setProviderFilter] = useState("0");
  const [ratingFilter, setRatingFilter] = useState("0");

  console.log(providerFilter)
  const genreId = Number(genreFilter);
  const providerId =Number(providerFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    // .filter((m) => {
    //   return providerId > 0 ? provider_ids.includes(providerId) : true;
    // });
    .filter((m)=> {
      return  m.vote_average >= ratingFilter;
    })

  const handleChange = (type, value) => {
    if(type === "name") setNameFilter(value);
    if(type === "genre") setGenreFilter(value);
    if(type === "rating") setRatingFilter(value);
    else (setProviderFilter(value));
  };
 
  let providerMovies = movies.filter((m) => {
      return providerId > 0 ? WatchProviders.includes(providerId) : true;
    });
  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            providerFilter= {providerFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies} providers={{providerMovies}}></MovieList>
      </Grid>
      <Grid item xs={12} >
      <SiteFooter size = "large"></SiteFooter>
      </Grid>
    </Grid>
    
    
  );
}
export default MovieListPageTemplate;