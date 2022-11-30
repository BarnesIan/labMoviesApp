import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import img from '../../images/film-poster-placeholder.png';//Change
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ActorsContext } from "../../contexts/actorsContext";
import Avatar from '@mui/material/Avatar';
import IconButton from "@mui/material/IconButton";

export default function ActorCard({actor,action}){
//const actor = props.actor;
const {favourites,addToFavourites} = useContext(ActorsContext);

if (favourites.find((id) => id === actor.id)) {
  actor.favourite = true;
} else {
  actor.favourite = false;
}

// const handleAddToFavourites = (e) => {
//   e.preventDefault();
//   addToFavourite(actors);
// };
    return (
        <Card sx={{ maxWidth: 345 }}>
             <CardHeader
             avatar={
              actor.favourite ? (
                <Avatar sx={{ backgroundColor: 'red' }}>
                  <FavoriteIcon />
                </Avatar>
              ) : null
            }
           title={
            <Typography variant="h5" component="p">
              {actor.name}{" "}
            </Typography>
          }
          />
          <CardMedia
            sx={{ height: 500 }}
            image={
                actor.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` 
                : img
            }
          />
          <CardContent>
          {/* <CardActions disableSpacing>
          <IconButton aria-label="add to favourites" onClick={handleAddToFavourites}>
        <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
        <Button variant="outlined" size="medium" color="primary">
        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
        </Button>
      </CardActions> */}
          </CardContent>
          <CardActions disableSpacing>
            {action(actor)}
          <Link to={`/actors/${actor.id}`}>
            <Button  variant="outlined" size="medium" color="primary">
            Bio
          </Button>
        </Link>
        </CardActions>
        </Card>
      );
}