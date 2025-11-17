// App.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Container, Paper } from "@mui/material";
import ChilliMap from "./ChilliMap";
import { FixLeafletIcons } from "./leafletFix";

FixLeafletIcons();

export default function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar disableGutters sx={{ px: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            🌶️ Global Chilli Trail
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper sx={{ p: 3, borderRadius: "12px" }} elevation={3}>
          <Typography variant="h4" gutterBottom>
            Global Chilli Trail Project
          </Typography>

          <Typography variant="body1" sx={{ mt: 2 }}>
            This project explores how chili peppers spread around the world,
            their cultural impact, and iconic regional dishes. Click a marker on
            the map to learn about each region’s chili history.
          </Typography>
        </Paper>

        <ChilliMap />
      </Container>
    </div>
  );
}
