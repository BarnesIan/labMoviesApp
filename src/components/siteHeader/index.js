import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAuth } from "../../contexts/authContext"
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const[error,setError]=useState("")
  const{currentUser, logout} = useAuth();
  const[open1, setOpen1] = React.useState(false);  //NEW

  async function handleLogOut(){
    setOpen1(true)
    setError('')
    try{
      await logout()
      setTimeout(
        navigate(0),5000);
    }catch{
      setError("Failed to logout")
    }
  }

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Trending", path: "/movies/trending" },
    { label: "Favourite Movies", path: "/movies/favourites" },
    { label: "Playlist", path: "/movies/mustWatch" },
    { label: "Actors", path: "/actors" },
    { label: "Favorite Actors", path: "/actors/favourites" },
    { label: "Signup", path: "/users/signup" },
    { label: "Login", path: "/users/login" },
    //{ label: "Logout", handleLogOut},

    
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSnackClose = (event) => {
    setOpen1(false);
  };
    
 

  return (
    <>
      <AppBar position="fixed" color="secondary">
        
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          
            
          <>
    {error && <Snackbar 
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open1}
        onClose={handleSnackClose}
        >
  
        <Alert onClose={handleSnackClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      
      </Snackbar>}
      {!error &&<Snackbar 
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open1}
        onClose={handleSnackClose}
        >
        <Alert onClose={handleSnackClose}  severity="success" sx={{ width: '100%' }}>
          Logged Out
          
        </Alert>
    
      </Snackbar>}
      </>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
          <>
          {currentUser !== null && <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <strong>User: </strong> {currentUser.email}
          </Typography>}
            </>
            {isMobile ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                <MenuItem onClick = {handleLogOut}>
                    Logout
                </MenuItem>
                </Menu>
                
              </>
            ) : (
              <>
                {menuOptions.map((opt) => (
                  <Button
                    key={opt.label}
                    color="inherit"
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </Button>

                ))}
                {currentUser &&<Button
            color = "inherit"
            onClick={() => handleLogOut()}
            
            >
            Logout
          
          </Button>}
            
              </>
              
            )}
            
        </Toolbar>
       
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;