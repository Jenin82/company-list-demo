import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { WbSunny, Brightness2 } from "@mui/icons-material";
import { useStore } from "../../services/store";

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useStore();

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Companies List Demo
          </Typography>
          <IconButton color="inherit" onClick={toggleTheme}>
            {isDark ? <Brightness2 /> : <WbSunny />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
