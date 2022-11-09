import React from "react";
import Card from "@mui/material/Card";
//import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import img from '../../images/film-poster-placeholder.png';//Change
import { Link } from "react-router-dom";


export default function ActorCard(props){
const actor = props.actor;

    return (
        <Card sx={{ maxWidth: 345 }}>
             <CardHeader
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
          <Link to={`/actors/${actor.id}`}>
        </Link>
          
          </CardContent>
        </Card>
      );
}