import React, {useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import StarRate from "@mui/icons-material/StarRate";


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
        <Typography variant="h6" component="p">
        They are known for {actor.known_for_department}.
      </Typography>
        
      <Fab
        color="secondary"
        variant="extended"
        //onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      </>
  );
};
export default ActorDetails ;