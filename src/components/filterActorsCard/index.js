import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { useQuery } from "react-query";
import Spinner from '../spinner'

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

  export default function FilterActorsCard(props) {
   
    const handleChange = (e, type, value) => {
      e.preventDefault();
      props.onUserInput(type, value); // NEW
    };
  
    const handleTextChange = (e) => {
      handleChange(e, "name", e.target.value);
    };
  
  return (
    <Card 
      sx={{
        maxWidth: 345,
        backgroundColor: "rgb(204, 204, 0)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the Actors.
        </Typography>
        <TextField
         sx={formControl}
         id="filled-search"
         label="Search field"
         type="search"
         variant="filled"
         value={props.titleFilter}
         onChange={handleTextChange}
        />
      
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the Actors.
          <br />
        </Typography>
      </CardContent>
  </CardContent>
  </Card>
  );
}