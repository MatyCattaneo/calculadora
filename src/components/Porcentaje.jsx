import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

function Porcentaje() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [resultado, setResultado] = useState(null);

    function calcular() {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        if (isNaN(a) || isNaN(b)) {
            setResultado("Ingrese un número válido.");
            return;
        }

        //calculo el porcentaje y con toFixed(2) limito a 2 decimales
        setResultado((a * (b / 100)).toFixed(2));
    }

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
            <Typography variant="h5" textAlign="center">
                Porcentaje
            </Typography>

            <TextField
            label="Número"
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            fullWidth
            />

            <TextField
            label="Porcentaje"
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            fullWidth
            />

            <Button variant="contained" onClick={calcular}>
                Calcular Porcentaje
            </Button>

            {resultado !== null && (
            <Typography variant="subtitle1" textAlign="center">
                Resultado: {resultado}
            </Typography>
            )}
        </Box>
    );
}

export default Porcentaje;