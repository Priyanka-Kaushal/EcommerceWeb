import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();
  console.log(location.pathname === "/");
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  const shopMenuLinks = [
    { label: "Shop Boys", path: "/ProductPage" },
    { label: "Shop Girls", path: "/ProductPage" },
  ];

  const collectionMenuLinks = [
    {
      label: "Organic Cotton Boys",
      path: "/boysCollection",
    },
    {
      label: "Organic Cotton Girls",
      path: "/girlsCollection",
    },
  ];

  const newMenuLinks = [
    { label: "Just In", path: "/ProductPage" },
    {
      label: "Coming Soon",
      path: "/ProductPage",
    },
  ];

  const menuLinks =
    selectedTab === "Shop"
      ? shopMenuLinks
      : selectedTab === "Collection"
      ? collectionMenuLinks
      : newMenuLinks;

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#1976d2",
          boxShadow: "none",
          zIndex: 1302,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              // textTransform: "none",
              textDecoration: "none",
              ursor: "pointer",
              color: "white",
            }}
            href="/"
          >
            {props.titleName}
            {/* Shonaz Be Natural */}
          </Button>
          {location.pathname !== "/" && (
            <>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <Button
                  sx={{ color: "WHITE" }}
                  onClick={() => {
                    setSelectedTab("New");
                    toggleDrawer(true);
                  }}
                >
                  {props.new}
                  {/* New */}
                </Button>

                <Button
                  sx={{ color: "WHITE" }}
                  onClick={() => {
                    setSelectedTab("Shop");
                    toggleDrawer(true);
                  }}
                >
                  {props.Shop}
                  {/* Shop */}
                </Button>
                <Button
                  sx={{ color: "WHITE" }}
                  onClick={() => {
                    setSelectedTab("Collection");
                    toggleDrawer(true);
                  }}
                >
                  {props.collection}
                  {/* Collection */}
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => toggleDrawer(false)}
        sx={{
          zIndex: 1301,
        }}
      >
        <Box
          sx={{
            width: 290,
            padding: 2,
            mb: 8,
          }}
        >
          <List sx={{ mt: 4 }}>
            {menuLinks.map((category, val) => (
              <ListItem button key={val}>
                <ListItemText>
                  <Link
                    to={category.path}
                    style={{ color: "black", textDecoration: "none" }}
                    onClick={() => toggleDrawer(false)}
                  >
                    {category.label}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box sx={{ marginTop: "64px" }}></Box>
    </div>
  );
};

export default Header;

Header.defaultProps = {
  titleName: "shonaz Be Natural",
  new: "NEW",
  Shop: "SHOP",
  collection: "Collection",
};
