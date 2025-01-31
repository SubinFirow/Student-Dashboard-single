import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import JoinRightIcon from "@mui/icons-material/JoinRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";
import { getTheme } from "../theme/theme";

const drawerWidth = 240;

function HamburgerMenu({ children }) {
  const theme = getTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const menuItems = [
    { text: "Student Data", icon: DashboardIcon, path: "/dashboard" },
    {
      text: "Performance",
      icon: DashboardIcon,
      path: "/dashboard/moneyMap",
    },
    { text: "Settings", icon: SettingsIcon, path: "/dashboard/settings" },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <JoinRightIcon
            sx={{
              color: theme.palette.common.white,
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.common.white,
            }}
          >
            Student Dashboard
          </Typography>
        </Box>
      </Toolbar>
      <Divider
        variant="middle"
        sx={{ bgcolor: theme.palette.common.primary }}
      />
      <List>
        {menuItems.map((item, index) => (
          <Link href={item.path} passHref key={item.text}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <item.icon
                    sx={{
                      color: theme.palette.common.secondary,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.common.secondary }}
                    >
                      {item.text}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider
        variant="middle"
        sx={{ bgcolor: theme.palette.common.primary }}
      />
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: theme.palette.common.primary,
          boxShadow: "none",
          borderBottom: `2px solid ${theme.palette.common.shadow}`,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              width: "100%",
              gap: 1,
            }}
          >
            <Avatar
              sx={{
                bgcolor: theme.palette.common.focus,
                width: 34,
                height: 34,
              }}
            >
              <Typography variant="caption">SF</Typography>
            </Avatar>
            <Typography variant="body2">Subin Firow</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: theme.palette.common.shadow,
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
              bgcolor: theme.palette.common.shadow,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: theme.palette.common.primary,
          height: "100%",
        }}
      >
        <Box sx={{ height: "90px" }} />
        {children}
      </Box>
    </Box>
  );
}

HamburgerMenu.propTypes = {
  window: PropTypes.func,
};

export default HamburgerMenu;
