import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Link} from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import "./SignUpMenu.css";

const theme = createTheme();

const SignUpMenu = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [lastNameError, setLastNameError] = React.useState(false);

  const [userExist, setUserExist] = React.useState(false);
  const navigate = useNavigate();

  const postUser = () => {
    axios
      .post("http://mysterious-caverns-77924.herokuapp.com/customer/", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      })
      .then(({ data }) => {
        setUserExist(false);
        navigate('/');
      })
      .catch((err) => {
        setUserExist(true);
      });
  };
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

    if (firstName === "") {
      setFirstNameError(true);
      flag = false;
    } else {
      setFirstNameError(false);
    }

    if (lastName === "") {
      setLastNameError(true);
      flag = false;
    } else {
      setLastNameError(false);
    }
    return flag;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validate();

    if (isValid) {
      postUser();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className="registerWindow">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{ mt: 4, fontFamily: "Fredoka, sans-serif" }}
          >
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {userExist && <div className="error">User already exists.</div>}
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
            <TextField
              margin="normal"
              required
              fullWidth
              error={firstNameError}
              id={firstNameError ? "outlined-error-helper-text" : "first_name"}
              helperText={firstNameError ? "Incorrect First Name." : null}
              name="first_name"
              label="First Name"
              type="name"
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              error={lastNameError}
              id={lastNameError ? "outlined-error-helper-text" : "last_name"}
              helperText={lastNameError ? "Incorrect Last Name." : null}
              name="last_name"
              label="Last Name"
              type="name"
              onChange={(e) => setLastName(e.target.value)}
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
              Register
            </Button>
            <Grid container>
                <Link to="/signin" activeStyle>Sign In</Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    //   <div className="loginWindow">

    //   </div>
  );
};

export default SignUpMenu;
