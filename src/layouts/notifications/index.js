

import { useEffect, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { InputLabel, Select, FormControl, MenuItem, Paper } from "@mui/material"
import { useSelector, useDispatch } from "react-redux";
import { RegisterRoom, UploadRoomImage } from "redux/action/RoomAction"

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";


// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import WcIcon from '@mui/icons-material/Wc';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import { Link } from "react-router-dom";

function Notifications() {

  const dispatch = useDispatch()

  const [roomOccupancy, setRoomOccupancy] = useState("")
  const [furnishingType, setFurnishingType] = useState("")
  const [disabledSubmit, setDisableSubmit] = useState(true)
  const [owerName, setOwnerName] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [rentAmount, setRentAmount] = useState("")
  const [houseNumber, setHouseNumber] = useState("")
  const [fullAddress, setFullAddress] = useState("")
  const [file, setFile] = useState(null)

  const { RoomRegisterReducer } = useSelector((state) => state)

  useSelector((state) => console.log(RoomRegisterReducer))

  useEffect(() => {
    if (roomOccupancy.length > 0 && furnishingType.length > 0 && owerName.length > 0 && contactNumber.length > 0 && rentAmount.length > 0 && houseNumber.length > 0 && fullAddress.length > 0) {
      setDisableSubmit(false)
    }
  }, [roomOccupancy, furnishingType, owerName, contactNumber, rentAmount, houseNumber, fullAddress])

  function handleRoomChange(e) {
    setRoomOccupancy(e.target.value)
  }
  function handleFurnishingChange(e) {
    setFurnishingType(e.target.value)
  }

  function handleValueChange(e, { name }) {
    console.log(e, name)
    if (name === 'ownerName') {
      setOwnerName(e.target.value)
    }
    if (name === 'contactNumber') {
      setContactNumber(e.target.value)
    }
    if (name === 'rentAmount') {
      setRentAmount(e.target.value)
    }
    if (name === 'houseNumber') {
      setHouseNumber(e.target.value)
    }
    if (name === 'fullAddress') {
      setFullAddress(e.target.value)
    }

  }

  function handleFileChange(event) {
    setFile(event.target.files[0])
    console.log(file)
  }

  const handleSubmit = async () => {
    const data = {
      owerName: owerName,
      contactNumber: contactNumber,
      rentAmount: rentAmount,
      houseNumber: houseNumber,
      fullAddress: fullAddress,
      roomOccupancy: roomOccupancy,
      furnishingType: furnishingType
    }
    const formData = new FormData()
    formData.append('image', file)
    await dispatch(RegisterRoom(data))
    await dispatch(UploadRoomImage({ formData: formData, contactNumber: contactNumber }))
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {
        RoomRegisterReducer[0] && RoomRegisterReducer[0].room_register_status === "success" &&
        <MDAlert style={{display:"flex",justifyContent:"center",position:"absolute",zIndex:5,marginLeft:"10%",marginTop:"20%"}} >
          <MDTypography style={{margin:"10px"}} >
            {RoomRegisterReducer[0].room_register_response.message}
          </MDTypography>
          <MDTypography
            component={ Link}
            to="/dashboard"
            variant="button"
            textGradient
            style={{margin:"10px"}}
          >
            Go To Home Page
          </MDTypography>
        </MDAlert>
      }
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h5">সোনকালে বুকিং পাবলৈ আপোনাৰ কোঠা পঞ্জীয়ন কৰক/Register Your Room To get booking soon.</MDTypography>
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2} lineHeight={0}>
                <MDTypography variant="h5">অনুগ্ৰহ কৰি বিৱৰণবোৰ সাৱধানে পূৰণ কৰক/Please fill the Details carefully.</MDTypography>

              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                  <MDBox md={2} >
                    <MDInput value={owerName} type="text" label="Owner Name/মালিকৰ নাম" fullWidth onChange={(e) => { handleValueChange(e, { name: "ownerName" }) }} />
                  </MDBox>
                  <MDBox md={2} >
                    <MDInput value={contactNumber} type="number" label="Phone Number/ফোন নম্বৰ" fullWidth onChange={(e) => { handleValueChange(e, { name: "contactNumber" }) }} />
                  </MDBox>
                  <MDBox md={2} >
                    <MDInput value={rentAmount} type="number" label="Rent Amount per month/প্ৰতি মাহে ভাড়াৰ পৰিমাণ" fullWidth onChange={(e) => { handleValueChange(e, { name: "rentAmount" }) }} />
                  </MDBox>
                  <MDBox md={2} >
                    <MDInput value={houseNumber} type="text" label="House Number/ঘৰৰ নম্বৰ" fullWidth onChange={(e) => { handleValueChange(e, { name: "houseNumber" }) }} />
                  </MDBox>
                  <MDBox md={2} >
                    <MDInput value={fullAddress} type="text" label="Address Details with PIN/পিনৰ সৈতে ঠিকনাৰ বিৱৰণ" fullWidth onChange={(e) => { handleValueChange(e, { name: "fullAddress" }) }} />
                  </MDBox>
                  <MDBox md={2} >
                    <FormControl fullWidth style={{ height: "100%" }} >
                      <InputLabel labelId="demo-simple-select-label">Select Room Types/নিৰ্বাচিত ৰুম টাইপসমূহ</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="roomOccupasion"
                        value={roomOccupancy}
                        label="Select Room Types/নিৰ্বাচিত ৰুম টাইপসমূহ"
                        onChange={handleRoomChange}
                        style={{
                          height: "100%",
                          padding: "10px"
                        }}
                      >
                        <MenuItem value="Single" ><AirlineSeatReclineExtraIcon />Single</MenuItem>
                        <MenuItem value="Double"> <WcIcon />Double</MenuItem>
                        <MenuItem value="family"><FamilyRestroomIcon />Family</MenuItem>
                      </Select>
                    </FormControl>
                  </MDBox>
                  <MDBox md={2} >
                    <FormControl fullWidth style={{ height: "100%" }} >
                      <InputLabel labelId="demo-simple-select-label">Select Room Types/কোঠাৰ প্ৰকাৰ সমূহ বাছক</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="roomProperty"
                        value={furnishingType}
                        label="Select Room Types/কোঠাৰ প্ৰকাৰ সমূহ বাছক"
                        onChange={handleFurnishingChange}
                        style={{
                          height: "100%",
                          padding: "10px"
                        }}
                      >
                        <MenuItem value="Simi-Furnishing" ><EventSeatIcon />Simi-Furnishing</MenuItem>
                        <MenuItem value="Full-Furnishing"> <AssuredWorkloadIcon />Full-Furnishing</MenuItem>
                        <MenuItem value="Non-Furnishing"><SelfImprovementOutlinedIcon />Non-Furnishing</MenuItem>
                      </Select>
                    </FormControl>
                  </MDBox>
                  <MDBox md={2} >
                    <MDInput type="file" label="Select room image/কোঠাৰ ছবি নিৰ্বাচন কৰক" fullWidth onChange={handleFileChange} />
                  </MDBox>
                  <MDBox md={2}>
                    <MDButton variant="gradient" color="info" disabled={disabledSubmit} fullWidth onClick={handleSubmit} >Submit</MDButton>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
