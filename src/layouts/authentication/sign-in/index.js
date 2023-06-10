

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserLogin } from "../../../redux/action/UserAction"
import {ResetPassword} from "../../../redux/action/Reset/PasswordReset"

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Typography } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";


// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic() {
  const dispatch = useDispatch()
  const [rememberMe, setRememberMe] = useState(false);
  const [contactNumber, setContactNumber] = useState('')
  const [password, setPassword] = useState("")
  const [isResetPassword, setIsResetPassword] = useState(false)
  const [gmail,setGmail] = useState(null)

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const { UserLoginReducer } = useSelector((state) => state)

  useSelector((state) => console.log(UserLoginReducer))

  function handleValueChange(e, { name }) {
    console.log(name)
    if (name === 'contactNumber') {
      setContactNumber(e.target.value)
    }
    if (name === 'password') {
      setPassword(e.target.value)
    }
    if(name==="gmail"){
      setGmail(e.target.value)
    }
  }

  function handleSubmit() {
    let data = {
      contactNumber: contactNumber,
      password: password
    }
    if (contactNumber.length > 0 && password.length > 0) {
      dispatch(UserLogin(data))
    }
  }

  function handlePasswordReset(){
    if(gmail){
      dispatch(ResetPassword({gmail:gmail}))
    }else{
      alert("Please Enter Gmail")
    }
  }

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="number" value={contactNumber} label="Contact Number" fullWidth onChange={(e) => { handleValueChange(e, { name: "contactNumber" }) }} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" value={password} label="Password" fullWidth onChange={(e) => { handleValueChange(e, { name: "password" }) }} />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit} >
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center" onClick={() => { setIsResetPassword(true)}} >
              <MDTypography variant="button" color="text">
                <MDTypography
                  component={Link}
                  to=""
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Forget password?
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
        <Typography style={{
          position: "absolute"
        }} >
          {
            UserLoginReducer[0] && UserLoginReducer[0].user_login_status === "success" &&
            <MDAlert color="dark" dismissible >
              {
                UserLoginReducer[0].user_login_response.message
              }
              {
                UserLoginReducer[0].user_login_response.message !== "Wrong Password" &&
                <MDTypography
                  component={Link}
                  to="/dashboard"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Go To Dashboard
                </MDTypography>
              }
            </MDAlert>
          }
        </Typography>
      </Card>
      {
        isResetPassword &&
        <MDBox
          position="absolute"
          top="0"
          left="0"
          bgColor="success"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex="1"
        >
          <Card
          >
            <MDBox pt={4} pb={3} px={3}>
              <MDBox component="form" role="form">
                <MDBox mb={2}>
                  <MDInput type="email" value={gmail} label="g-mail" fullWidth onChange={(e)=>{ handleValueChange(e,{name:"gmail"})}} />
                </MDBox>
                <MDBox mt={4} mb={1}>
                  <MDButton variant="gradient" color="info" fullWidth onClick={handlePasswordReset}>
                    Reset
                  </MDButton>
                </MDBox>
                <MDBox mt={4} mb={1}>
                  <MDButton variant="gradient" color="info" fullWidth onClick={()=>{setIsResetPassword(false)}}>
                    Back
                  </MDButton>
                </MDBox>
              </MDBox>
            </MDBox>

          </Card>
        </MDBox>
      }


    </BasicLayout>
  );
}

export default Basic;
