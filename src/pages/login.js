import React, { useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from "@mui/material/Card";
import { useAuth } from "../contexts/authContext";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useNavigate } from 'react-router-dom';
const theme = createTheme();

export default function  Login() {
  const { login } = useAuth()
  const [error,setError] = useState("")
  const [loading,setLoading] = useState(false)
  const [open, setOpen] = React.useState(false);  //NEW
  const navigate = useNavigate();
  
  const handleSnackClose = (event) => {
    setOpen(false);
  };
    
  async function handleSubmit(e) {

    e.preventDefault();
    setOpen(true)
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })

    try{
      setError('')
      setLoading(true)
      await login(data.get('email'),data.get('password'))
      setTimeout(
      navigate("/"),5000);
    } catch {
      setError("Failed to sign in(email or password is incorrect!)")
    }
    setLoading(false)
    
    
  }
  console.log(error)

  return (
    <ThemeProvider theme={theme}>
      <>
    {error && <Snackbar 
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
        >
  
        <Alert onClose={handleSnackClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      
      </Snackbar>}
      {!error &&<Snackbar 
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
        >
        <Alert onClose={handleSnackClose}  severity="success" sx={{ width: '100%' }}>
          User Logged In!
          
        </Alert>
    
      </Snackbar>}
      </>
    <Card>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button disabled = {loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/users/signup" variant="body2">
                  Don't have an account? Signup
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </Card>
    </ThemeProvider>
  );
}