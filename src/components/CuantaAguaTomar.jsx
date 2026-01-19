import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper
} from "@mui/material";

export default function CuantaAguaTomar() {
  const [peso, setPeso] = useState("");
  const [agua, setAgua] = useState(null);

  const calcularAgua = () => {
    const p = parseFloat(peso);

    if (!p || p <= 0) {
      setAgua(null);
      return;
    }

    const litros = p * 0.035;
    setAgua(litros.toFixed(2));
  };

  return (
    <Paper elevation={4} sx={{ p: 3, maxWidth: 420, mx: "auto", mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Consumo de agua
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Peso (kg)"
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          fullWidth
        />

        <Button variant="contained" onClick={calcularAgua}>
          Calcular agua diaria
        </Button>

        {agua && (
          <Box textAlign="center" mt={2}>
            <Typography variant="h6">
              Deberías tomar aprox:
            </Typography>
            <Typography variant="h4" color="primary">
              {agua} L / día 💧
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
}