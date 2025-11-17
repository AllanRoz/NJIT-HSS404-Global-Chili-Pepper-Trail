// ChilliMap.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Typography } from "@mui/material";

const trailData = [
  {
    id: 1,
    lat: 19.43,
    lng: -99.13,
    region: "Mesoamerica (Origin)",
    arrival: "7500 BC",
    culturalImpact: "Foundation of all chili cultivation.",
    dish: "Mole",
  },
  {
    id: 2,
    lat: 13.75,
    lng: 100.5,
    region: "Thailand",
    arrival: "16th–17th Century",
    culturalImpact: "Revolutionized Thai cuisine with iconic spicy dishes.",
    dish: "Tom Yum",
  },
];

export default function ChilliMap() {
  const position = [20.0, 0.0];

  return (
    <MapContainer
      center={position}
      zoom={2}
      scrollWheelZoom={true}
      style={{
        height: "600px",
        width: "100%",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {trailData.map((point) => (
        <Marker key={point.id} position={[point.lat, point.lng]}>
          <Popup>
            <Box sx={{ maxWidth: 300 }}>
              <Typography variant="h6" color="primary">
                {point.region}
              </Typography>

              <Typography variant="subtitle2" sx={{ my: 1 }}>
                <b>Arrival/Origin:</b> {point.arrival}
              </Typography>

              <Typography variant="body2" sx={{ mt: 1 }}>
                <b>Cultural Impact:</b> {point.culturalImpact}
              </Typography>

              <Typography
                variant="body1"
                sx={{ mt: 1, fontWeight: "bold", color: "darkred" }}
              >
                Iconic Dish: {point.dish}
              </Typography>
            </Box>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
