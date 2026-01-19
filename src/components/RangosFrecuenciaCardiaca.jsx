import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper
} from "@mui/material";

export default function RangosFrecuenciaCardiaca() {
  const [edad, setEdad] = useState("");
  const [fcMax, setFcMax] = useState(null);

  const calcular = () => {
    const e = parseInt(edad);

    if (!e || e <= 0) {
      setFcMax(null);
      return;
    }

    setFcMax(220 - e);
  };

  const zonas = fcMax && [
    { nombre: "Zona 1 (50–60%)", min: fcMax * 0.5, max: fcMax * 0.6 },
    { nombre: "Zona 2 (60–70%)", min: fcMax * 0.6, max: fcMax * 0.7 },
    { nombre: "Zona 3 (70–80%)", min: fcMax * 0.7, max: fcMax * 0.8 },
    { nombre: "Zona 4 (80–90%)", min: fcMax * 0.8, max: fcMax * 0.9 },
    { nombre: "Zona 5 (90–100%)", min: fcMax * 0.9, max: fcMax * 1.0 }
  ];

  return (
    <Paper elevation={4} sx={{ p: 3, maxWidth: 460, mx: "auto", mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Frecuencia Cardíaca
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Edad"
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          fullWidth
        />

        <Button variant="contained" onClick={calcular}>
          Calcular zonas
        </Button>

        {fcMax && (
          <Box mt={2}>
            <Typography align="center" variant="h6">
              FC Máx: {fcMax} bpm
            </Typography>

            {zonas.map((z, i) => (
              <Typography key={i} sx={{ mt: 1 }}>
                {z.nombre}: {Math.round(z.min)} – {Math.round(z.max)} bpm
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    </Paper>
  );
}