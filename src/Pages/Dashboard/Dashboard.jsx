import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import Battery from "../../components/Dashboard/Battery";
import Connection from "../../components/Dashboard/Connection";
import Control from "../../components/Dashboard/Control";
import DashboardTitle from "../../components/Dashboard/DashboardTitle";
import Robot from "../../components/Dashboard/Robot";
import Sidebar from "../../components/Dashboard/Sidebar";
import Speed from "../../components/Dashboard/Speed";
import Water from "../../components/Dashboard/Water";
import { connectWithStore } from "../../contexts/Context";
import { getInfo } from "../../Services/service";
import SecondaryTitle from "../../shared/SecondaryTitle";

import "./Dashboard.css";
const Dashboard = ({ equipments, equipment, speed, storeSetState }) => {
  const [equipmentId, setEquipmentId] = useState("");

  const handleSelect = async (event) => {
    setEquipmentId(event.target.value);
  };

  const fetchEquipment = async () => {
    const chosenEquipment = await getInfo(equipmentId);
    storeSetState({ equipment: chosenEquipment });
  };

  useEffect(() => {
    fetchEquipment();
  }, [equipmentId]);

  //to-do: Realizar conexão destes dados com o backend

  return (
    <main className="dashboardContainer">
      {equipments.length > 0 ? (
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
            {equipments.length > 0 ? (
              <FormControl fullWidth>
                <InputLabel>Equipamento</InputLabel>
                <Select
                  value={equipmentId}
                  label="Equipamento"
                  onChange={(event) => handleSelect(event)}
                >
                  {equipments.map((equipment) => (
                    <MenuItem value={equipment.id}>
                      Equipamento {equipment.id}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <h1>Carregando</h1>
            )}
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
                  <Water
                    status={{
                      title: "Água",
                      value: equipment.waterLevel
                        ? `${equipment.waterLevel}%`
                        : `-`,
                    }}
                  />
                  <Connection
                    status={{
                      title: "Conexão",
                      value: equipment.batteryLevel ? `Connected` : `-`,
                    }}
                  />
                  <Battery
                    status={{
                      title: "Bateria",
                      value: equipment.batteryLevel
                        ? `${equipment.batteryLevel}%`
                        : `-`,
                    }}
                  />
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
              <>
                <Grid container spacing={4}>
                  {equipmentId ? (
                    <>
                      <Robot
                        id={equipmentId}
                        status={equipment.status}
                        active={true}
                      />
                      <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                        <Paper
                          elevation={0}
                          sx={{
                            padding: "1rem",
                            height: "27rem",
                          }}
                        >
                          <SecondaryTitle title={"Controles"} />

                          <Control id={equipmentId} />

                          <Speed id={equipmentId} />
                        </Paper>
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Robot id={equipmentId} status={equipment.status} />
                    </>
                  )}
                </Grid>
              </>
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <h1>Carregando</h1>
        </>
      )}
    </main>
  );
};

export default connectWithStore(Dashboard);
