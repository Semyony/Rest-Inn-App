import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./SignInMenu.css";
import { useNavigate } from "react-router-dom";


const theme = createTheme();

const SignInMenu = () => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const navigate = useNavigate();

  function validate() {
    let flag = true;

    if (email === "" || !/.+@.+\.[A-Za-z]+$/.test(email)) {
      setEmailError(true);
      flag = false;
    } else {
      setEmailError(false);
    }

    if (password === "") {
      setPasswordError(true);
      flag = false;
    } else {
      setPasswordError(false);
    }
    return flag;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validate();

    if (isValid) {
      navigate('/');
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className="loginWindow">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5"  sx={{mt: 4, fontFamily: "Fredoka, sans-serif"}}>
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              error={emailError}
              id={emailError ? "outlined-error-helper-text" : "email"}
              helperText={emailError ? "Incorrect Email Address." : null}
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              error={passwordError}
              id={passwordError ? "outlined-error-helper-text" : "password"}
              helperText={passwordError ? "Incorrect Password." : null}
              name="password"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/signin" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" >
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
    //   <div className="loginWindow">

    //   </div>
  );
}

export default SignInMenu;
