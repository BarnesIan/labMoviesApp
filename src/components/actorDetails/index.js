import React, {useState} from "react";
import Chip from "@mui/material/Chip";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import StarRate from "@mui/icons-material/StarRate";
import MovieIcon from '@mui/icons-material/Movie';

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  // Don't miss this!
  //const [] = useState(false);
  
  return (
    <>
      <Typography variant="h5" component="h3">
        Bio
        <a href={`https://www.imdb.com/name/${actor.imdb_id}`}>
          <MovieIcon color="primary" />
        </a>
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>
      <Typography variant="h6" component="p">
        They were born in {actor.place_of_birth}.
      </Typography>
      <Chip
          icon={<StarRate />}
          label={`${actor.popularity}`}
        />
    
      </>
  );
};
export default ActorDetails ;