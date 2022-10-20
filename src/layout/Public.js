import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideBar from "../component/Sidebar";

const Public = ({ children }) => {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <SideBar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Public;
