import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { getMovieCast } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import { Link } from "react-router-dom";

const TemplateMovieCast = ({ movie, children}) => {
    const { data , error, isLoading, isError } = useQuery(
      ["credits", { id: movie.id }],
      getMovieCast,
    );
    
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
    const credits = data.cast

  return (
    <Grid container spacing={4} sx={{ padding: '20px' }}>
     <Grid item xs={10}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div">Cast</ListSubheader>
      </ImageListItem>
            <ImageList 
                cols={4}>
                {credits.map((image) => (
                    <ImageListItem key={image.profile_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.profile_path}`}
                        alt={image.profile_path}
                       
                    />

<ImageListItemBar
            title={image.name}
            actionIcon={
              <Link to={`/actors/${image.id}`}>
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${credits.name}`}
              >
                <InfoIcon />
              </IconButton>
              </Link>
            }
          />
                    </ImageListItem>
                ))}
              
            </ImageList>
          </div>
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
        </Grid>
  );
}

export default TemplateMovieCast;