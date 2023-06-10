
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserSignIn } from "../../../redux/action/UserAction"

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { Typography, } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert"


// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [isAgree, setIsAgree] = useState(false)

  const data = useSelector((state) => state.UserSignInReducer)
  useEffect(() => {
    console.log(data)
  }, [data])
  // useSelector((state) => console.log(state))
  function handleNameChange(e, { name }) {
    console.log(name)
    if (name === 'userName') {
      setUserName(e.target.value)
    }
    if (name === 'userEmail') {
      setUserEmail(e.target.value)
    }
    if (name === 'userPassword') {
      setUserPassword(e.target.value)
    }
    if (name === 'contactNumber') {
      setContactNumber(e.target.value)
    }
  }

  function handleSubmit() {
    if (isAgree && userName.length > 0 && userEmail.length > 0 && userPassword.length > 0) {
      const data = {
        name: userName,
        email: userEmail,
        contact: contactNumber,
        password: userPassword
      }

      dispatch(UserSignIn(data))
    }
  }

  function handleRedirect(){
    if(data[0] && data[0].user_sign_in_status === 'success'){
      setUserEmail("")
      setUserName("")
      setUserPassword("")
      setIsAgree(false)
    } 
  }

  return (
    <CoverLayout image={bgImage}>
      <Card>

        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today/আজি আমাৰ সৈতে যোগ দিয়ক|
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register/পঞ্জীয়ন কৰিবলৈ আপোনাৰ ইমেইল আৰু পাছৱৰ্ড প্ৰবিষ্ট কৰক |
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" value={userName} label="Name/নাম" variant="standard" fullWidth onChange={(e) => { handleNameChange(e, { name: "userName" }) }} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" value={userEmail} label="Email/জি-মেইল" variant="standard" fullWidth onChange={(e) => { handleNameChange(e, { name: "userEmail" }) }} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="number" value={contactNumber} label="contact/ম'বাইল নম্বৰ" variant="standard" fullWidth onChange={(e) => { handleNameChange(e, { name: "contactNumber" }) }} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" value={userPassword} label="Password/পাছৱাৰ্ড" variant="standard" fullWidth onChange={(e) => { handleNameChange(e, { name: "userPassword" }) }} />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox onChange={() => { setIsAgree(!isAgree) }} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the/মই সহমত&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions/চৰ্তাৱলী আৰু নিয়মাৱলী
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" disabled={isAgree ? false : true} fullWidth onClick={handleSubmit} >
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In/ছাইন ইন
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
        <Typography style={{
          position: "absolute"
        }} >
          {
            data[0] && data[0].user_sign_in_status === "success" &&
            <MDAlert color="dark" dismissible >
               {
                data[0].user_sign_in_response.message
               }
            </MDAlert>
          }
          {
            data[0] && data[0].user_sign_in_status === 'failed' && 
            <MDAlert color="dark" dismissible handleRedirect={handleRedirect}  >
              {
                data[0].user_sign_in_response.message
              }
            </MDAlert>
          }
        </Typography>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
