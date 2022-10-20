import * as React from "react";
import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import ListIcon from "@mui/icons-material/List";
import ApiIcon from "@mui/icons-material/Api";
import TourIcon from "@mui/icons-material/Tour";
const drawerWidth = 240;
const DashboardRoutes = [
  {
    name: "Todo",
    icon: <ListIcon />,
    path: "/todo",
  },
  {
    name: "Dashboard",
    icon: <DashboardCustomizeOutlinedIcon />,
    path: "/dashboard",
  },
  {
    name: "Cruds",
    icon: <ApiIcon />,
    path: "/cruds",
  },
  { name: "Tours", icon: <TourIcon />, path: "/tours" },
  {
    name: "Chats",
    icon: <ContactSupportOutlinedIcon />,
    path: "/chats",
  },
  {
    name: "Comments",
    icon: <MarkUnreadChatAltOutlinedIcon />,
    path: "/comments",
  },
];

function Sidebar(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {DashboardRoutes.map((route, index) => (
          <ListItem
            sx={{
              background: location.pathname === route.path && "#f6f6f6",
            }}
            onClick={() => navigate(route.path)}
            key={index}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText primary={route.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
