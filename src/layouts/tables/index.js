import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {GetAddedList} from "redux/action/RoomAction"
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const dispatch = useDispatch()
  const [customerNumber,setCustomerNumber] = useState("")
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [disableButton,setDisableButton] = useState(true)

  useSelector((state) => console.log(state.GetAddedRoomReducer))
  
  useEffect(()=>{
    if(customerNumber.length === 10){
      setDisableButton(false)
    }
  },[customerNumber])
  function handleNumberChange(e){
    setCustomerNumber(e.target.value)
  }

  function handleSubmit(){
    const data = {
      customerNumber:customerNumber
    }

    dispatch(GetAddedList(data))
    setCustomerNumber("")
    setDisableButton(true)
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="light"
                borderRadius="lg"
                coloredShadow="info"
                style={{
                  display:"flex",
                  justifyContent:"space-around"
                }}
              >
                <MDInput type="number" label="Enter Your Contact Number" value={customerNumber} onChange={handleNumberChange} />
                <MDButton disabled={disableButton} onClick={handleSubmit} >Get Added List</MDButton>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
         
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
