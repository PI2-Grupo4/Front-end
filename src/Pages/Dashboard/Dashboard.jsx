import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import Battery from "../../components/Dashboard/Battery";
import Connection from "../../components/Dashboard/Connection";
import Control from "../../components/Dashboard/Control";
import DashboardTitle from "../../components/Dashboard/DashboardTitle";
import Robot from "../../components/Dashboard/Robot";
import Sidebar from "../../components/Dashboard/Sidebar";
import Speed from "../../components/Dashboard/Speed";
import Water from "../../components/Dashboard/Water";
import SecondaryTitle from "../../shared/SecondaryTitle";

import "./Dashboard.css";
const Dashboard = () => {
  //to-do: Realizar conexão destes dados com o backend
  const statusData = [
    {
      title: "Water",
      value: "100%",
    },
    {
      title: "Connection",
      value: "Connected",
    },
    {
      title: "Battery",
      value: "100%",
    },
  ];

  return (
    <main className="dashboardContainer">
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          },
        }}
      >
        <Sidebar />
        <Box
          sx={{
            flex: 1,
            paddingY: "2rem",
          }}
        >
          {/* Title */}
          <DashboardTitle />
          {/* Status */}
          <Box
            sx={{
              width: {
                xs: "95%",
                sm: "95%",
                md: "90%",
                lg: "80%",
                xl: "80%",
              },
              margin: "0 auto",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                marginTop: "2rem",
                padding: "1rem",
              }}
            >
              <SecondaryTitle title={"Status"} />
              {/* Cards */}
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Water status={statusData[0]} />
                <Connection status={statusData[1]} />
                <Battery status={statusData[2]} />
              </Grid>
            </Paper>
          </Box>
          {/* Robot And Control */}
          <Box
            sx={{
              width: {
                xs: "95%",
                sm: "95%",
                md: "90%",
                lg: "80%",
                xl: "80%",
              },
              margin: "0 auto",
              marginTop: "1rem",
            }}
          >
            <Grid container spacing={4}>
              <Robot />
              <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                <Paper
                  elevation={0}
                  sx={{
                    padding: "1rem",
                    height: "27rem",
                  }}
                >
                  <SecondaryTitle title={"Control"} />
                  <Control />
                  <Speed />
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default Dashboard;
