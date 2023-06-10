import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import home from "../../../../components/img/home.jpg"
import { Typography } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
// ReportsBarChart configurations
import configs from "examples/Charts/BarCharts/ReportsBarChart/configs";
import { Link } from "react-router-dom";

function ReportsBarChart({ color, title, description, date, chart,handleAddRoom, img, roomData }) {
  const [addToBookingList,setAddzzzztoBookingList] = useState([])
  const [isAdd,setIsAdd] = useState(false)

  function handleAddToBooking(props){
     addToBookingList.push(props)
     handleAddRoom(props)
  }




  return (
    <Typography >
      {
        roomData &&

        <Card sx={{ height: "100%" }} id={roomData._id} >
          <MDBox padding="1rem">
            <MDBox
              variant="gradient"
              bgColor={color}
              borderRadius="lg"
              coloredShadow={color}
              py={2}
              pr={0.5}
              mt={-5}
              height="12.5rem"
            >
              {/* <Bar data={data} options={options} /> */}
              <img style={{ width: "100%", height: "100%" }} src={home || img} />
            </MDBox>
            <MDBox pt={3} pb={1} px={1}>
              <MDTypography variant="h6" textTransform="capitalize">
                {`Owner:${roomData.owerName}`}
              </MDTypography>
              <MDTypography component="div" variant="button" color="text" fontWeight="light">
                {`ContactNumber:${roomData.contactNumber}`}
              </MDTypography>
              <MDTypography component="div" variant="button" color="text" fontWeight="light">
                {`RoomSize:${roomData.roomOccupancy}`}
              </MDTypography>
              <MDTypography component="div" variant="button" color="text" fontWeight="light">
                {`Rent/Month:${roomData.rentAmount}/Month,(${roomData.furnishingType})`}
              </MDTypography>
              <MDTypography component="div" variant="button" color="text" fontWeight="light">
                {`Full_Address:${roomData.fullAddress}`}
              </MDTypography>
              <Divider />
              <MDBox display="flex" alignItems="center" style={{display:"flex",justifyContent:"space-around"}} >
                <MDTypography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
                  <Icon>schedule</Icon>
                </MDTypography>
                <MDTypography variant="button" color="text" fontWeight="light">
                  {date}
                </MDTypography>
                <MDButton
                  color="secondary"
                  onClick={(e)=>{handleAddToBooking(roomData)}}
                >
                  Add To Booking
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      }
      {
        !roomData && 
        <h1>Room List not Fount!</h1>
      }

    </Typography>

  );
}

// Setting default values for the props of ReportsBarChart
ReportsBarChart.defaultProps = {
  color: "dark",
  description: "",
};

// Typechecking props for the ReportsBarChart
ReportsBarChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default ReportsBarChart;
