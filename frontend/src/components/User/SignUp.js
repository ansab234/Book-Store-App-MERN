import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = React.useState(false);

  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  const history = useNavigate();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) history("/home");
  }, [history]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const submitHandler = async (e) => {
    if (!name || !email || !password || !confirmpassword) {
      setOpen(true);
      e.preventDefault();
      return;
    }
    if (password !== confirmpassword) {
      setOpen(true);
    }
    console.log(name, email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/register",
        {
          name,
          email,
          password,
        },
        config
      );
      console.log(data);
      // toast({
      //   title: "Registration Successful",
      //   status: "success",
      //   duration: 5000,
      //   isClosable: true,
      //   position: "bottom",
      // });
      localStorage.setItem("userInfo", JSON.stringify(data));
      // setPicLoading(false);
      history("/home");
    } catch (error) {
      // toast({
      //   title: "Error Occured!",
      //   description: error.response.data.message,
      //   status: "error",
      //   duration: 5000,
      //   isClosable: true,
      //   position: "bottom",
      // });
      // setPicLoading(false);
    }
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField
            variant="standard"
            fullWidth
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="standard"
            fullWidth
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl> */}

          <TextField
            variant="standard"
            fullWidth
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="standard"
            fullWidth
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onChange={(e) => e.preventDefault()}
            onClick={submitHandler}
          >
            Sign up
          </Button>
        </form>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            There is an Error!
          </Alert>
        </Snackbar>
        ;
      </Paper>
    </Grid>
  );
};

export default Signup;
