import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

function Suma() {
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

        setResultado(a + b);
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
                Suma
            </Typography>

            <TextField
            label="Número 1"
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            fullWidth
            />

            <TextField
            label="Número 2"
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            fullWidth
            />

            <Button variant="contained" onClick={calcular}>
                Sumar
            </Button>

            {resultado !== null && (
            <Typography variant="subtitle1" textAlign="center">
                Resultado: {resultado}
            </Typography>
            )}
        </Box>
    );
}

export default Suma;