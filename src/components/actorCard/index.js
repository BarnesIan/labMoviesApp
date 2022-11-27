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

export default function ActorCard(props,{action,actor}){
//const actor = props.actor;
const {favouriteActor,addToFavourite} = useContext(ActorsContext);

if (favouriteActor.find((id) => id === actor.id)) {
  actor.favouriteActor = true;
} else {
  actor.favouriteActor = false;
}

// const handleAddToFavourite = (e) => {
//   e.preventDefault();
//   addToFavouriteActors(actor);
// };
    return (
        <Card sx={{ maxWidth: 345 }}>
             <CardHeader
             avatar={
              actor.favouriteActor ? (
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
            <CardActions disableSpacing>
            {action(actor)}
          <Link to={`/actors/${actor.id}`}>
            <Button  variant="outlined" size="medium" color="primary">
            Bio
          </Button>
        </Link>
        </CardActions>
          </CardContent>
        </Card>
      );
}