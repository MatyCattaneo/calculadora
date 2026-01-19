import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper
} from "@mui/material";

export default function IMCCalculator() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [categoria, setCategoria] = useState("");
  const [color, setColor] = useState("text.primary");

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (!p || !a || a <= 0) {
      setImc(null);
      setCategoria("Ingrese valores válidos");
      setColor("text.secondary");
      return;
    }

    const resultado = p / (a * a);
    const imcRedondeado = resultado.toFixed(2);

    setImc(imcRedondeado);
    const cat = clasificarIMC(resultado);
    setCategoria(cat);
    setColor(colorPorCategoria(cat));
  };

  const clasificarIMC = (valor) => {
    if (valor < 18.5) return "Bajo peso";
    if (valor < 25) return "Peso normal";
    if (valor < 30) return "Sobrepeso";
    if (valor < 35) return "Obesidad grado I";
    if (valor < 40) return "Obesidad grado II";
    return "Obesidad grado III";
  };

  const colorPorCategoria = (cat) => {
    switch (cat) {
      case "Peso normal":
        return "success.main";
      case "Bajo peso":
        return "warning.main";
      case "Sobrepeso":
        return "warning.main";
      case "Obesidad grado I":
      case "Obesidad grado II":
      case "Obesidad grado III":
        return "error.main";
      default:
        return "text.primary";
    }
  };

  return (
    <Box    
      sx={{
        maxWidth: 300,
        mx: "auto",
        mt: 4,
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      
      <Typography variant="h5" align="center">
        Calculadora de IMC
      </Typography>

      <TextField
        label="Peso (kg)"
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        fullWidth
      />

      <TextField
        label="Altura (m)"
        type="number"
        inputProps={{ step: "0.01" }}
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        fullWidth
      />

      <Button variant="contained" onClick={calcularIMC}>
        Calcular IMC
      </Button>

      {imc && (
        <Box textAlign="center" mt={2}>
          <Typography variant="h6" sx={{ color }}>
            IMC: {imc}
          </Typography>
          <Typography variant="subtitle1" sx={{ color }}>
            {categoria}
          </Typography>
        </Box>
      )}
    </Box>
  );
}