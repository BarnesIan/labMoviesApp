import React from 'react'
import { useQuery } from 'react-query';
import Spinner from '../spinner'
import { getProviders } from '../../api/tmdb-api';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

export default function WatchProviders(props) {
    const { data, error, isLoading, isError } = useQuery("providers", getProviders);
   console.log()
   
   if(isLoading){
    return <Spinner/>;
   }
   console.log(data)
   if (isError) {
    return <h1>{error.message}</h1>;
  }

   const providers = data.results;
    if (providers[0].provider_name !== "All"){
      providers.unshift({ provider_id: "0", provider_name: "All" });
    }


  return (
    <FormControl sx={formControl}>
          <InputLabel id="provider-label">Provider</InputLabel>
          <Select
    labelId="provider-label"
    id="provider-select"
    defaultValue=""
    value={props.providerFilter}
    onChange={props.handleProviderChange}
    
  >
            {providers.map((provider) => {
              return (
                <MenuItem key={provider.provider_id} value={provider.provider_id}>
                  {provider.provider_name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl> 
  )
}
