import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Button, Stack, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
 

  return (
    <div>
      <AppBar position="sticky" sx={{ backgroundColor: "#3F403F" }}>
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <MenuBookIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto", mr: "100px" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="add" label="Add Product" />
            <Tab LinkComponent={NavLink} to="books" label="Books" />
            <Tab LinkComponent={NavLink} to="about" label="About us" />
          </Tabs>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Stack>
          <Button >LogOut</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
