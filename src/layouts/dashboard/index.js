
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetAllRoom, AddToBookingList } from "redux/action/RoomAction"

import { Card, Divider } from "@mui/material";
import home from "../../components/img/home.jpg"

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDAlert from "components/MDAlert";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";




function Dashboard() {
  const dispatch = useDispatch()
  const { sales, tasks } = reportsLineChartData;
  const [isAdd, setIsAdd] = useState(false)
  const [disableSubmit, setDisableSubmit] = useState(true)
  const [addRoomList, setAddRoomList] = useState("")
  const [customerContact, setCustomerContact] = useState("")
  const { RoomListReducer, AddRoomReducer } = useSelector((state) => state)


  useSelector((state) => console.log("state===>", AddRoomReducer))

  useEffect(() => {
    dispatch(GetAllRoom())
  }, [])
  useEffect(() => {
    if (customerContact.length === 10) {
      setDisableSubmit(false)
    }
  }, [customerContact])

  function handleAddRoom(prop) {
    setIsAdd(true)
    setAddRoomList(prop)
    console.log(prop)
  }

  function handleNumberChange(e) {
    setCustomerContact(e.target.value)
  }

  function handleSubmit() {
    const data = {
      addRoomList: addRoomList,
      customerContact: customerContact
    }
    dispatch(AddToBookingList(data))
  }

  return (
    <DashboardLayout >
      <DashboardNavbar />
      {
        isAdd &&
        <Card sx={{ height: "auto%", width: "90%", position: "absolute", zIndex: 5, textAlign: "center" }} >
          <MDBox padding="1rem">
            <MDBox
              variant="gradient"
              bgColor={"dark"}
              borderRadius="lg"
              coloredShadow={"dark"}
              py={2}
              pr={0.5}
              mt={-5}
              height="12.5rem"
            >
              <img style={{ width: "50%", height: "100%" }} src={home} />
            </MDBox>
            <MDBox pt={3} pb={1} px={1}>
              <MDTypography variant="h6" >
                Room Owner Name : {addRoomList.owerName}
              </MDTypography>
              <MDTypography variant="h6" >
                Room Owner Contact Number : {addRoomList.contactNumber}
              </MDTypography>
              <MDTypography variant="h6" >
                Room Rent/Month : Rs-{addRoomList.rentAmount} only, ({addRoomList.furnishingType})
              </MDTypography>
              <MDTypography variant="h6" >
                Room Size : {addRoomList.roomOccupancy}
              </MDTypography>
              <MDTypography variant="h6" >
                House Number : {addRoomList.houseNumber}
              </MDTypography>
              <MDTypography variant="h6" >
                Room Full Address : {addRoomList.fullAddress}
              </MDTypography>
            </MDBox>
            <MDBox pt={3} pb={1} >
              <MDInput type="number" label="Enter Your Contact Number" value={customerContact} onChange={handleNumberChange} />
            </MDBox>
            <MDBox pt={3} pb={1} px={1} style={{ display: "flex", justifyContent: "space-around" }} >
              <MDButton
                color="warning"
                onClick={(e) => { setIsAdd(false) }}
              >
                Cancel
              </MDButton>
              <MDTypography
                component={Link}
                to={AddRoomReducer[0].add_room_status === "success" ? "/tables" : "/"}
                color="success"
                variant="button"
              // onClick={handleSubmit}
              // disabled={disableSubmit}
              >
                {
                  customerContact.length === 10 ?
                    <MDButton
                      color="success"
                      onClick={handleSubmit}
                      disabled={disableSubmit}
                    >
                      Add
                    </MDButton> : ""
                }

              </MDTypography>
            </MDBox>
          </MDBox>
        </Card>
      }
      <MDBox py={3}>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {
              RoomListReducer[0] && RoomListReducer[0].room_list_status === "success" &&
              RoomListReducer[0].room_list_response.collection_list.map((i, key) => {
                return (
                  <Grid item xs={12} md={6} lg={4} key={key}>
                    <MDBox mb={3}>
                      <ReportsBarChart
                        color="info"
                        title="website views"
                        description="Last Campaign Performance"
                        date="campaign sent 2 days ago"
                        roomData={i}
                        chart={reportsBarChartData}
                        handleAddRoom={handleAddRoom}
                      />
                    </MDBox>
                  </Grid>
                )
              })
            }
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
