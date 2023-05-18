import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Box
} from "@mui/material";


const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <>
      <AppBar sx={{ background: "#063970", position: "relative" }}>
        <Toolbar>
        <Box
            component="img"
            sx={{
              width: 59,
              height: 40,
            }}
           
            src="./images/logo.png"
          />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "40%", color: "lightblue" }}>
                Fstyle
              </Typography>
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
              </Tabs>
              <Button sx={{ marginLeft: "auto",  color: "white" }}>Sign In</Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
