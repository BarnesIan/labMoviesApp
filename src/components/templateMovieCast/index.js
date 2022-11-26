import React, { useState } from "react";
import MovieCast from "../movieCast";
import { useParams } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import FilterCard from "../filterMoviesCard";
import { getMovieCast } from "../../api/tmdb-api";
import { useQuery } from "react-query";

function TemplateMovieCast({ actors, title, action }) {
    const { id } = useParams();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  

  let displayedActors = actors
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });
console.log(displayedActors)

const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
        <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <MovieCast action={action} actors={actors}></MovieCast>
      </Grid>
    </Grid>
  );
}
export default TemplateMovieCast;