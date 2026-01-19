import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

function Division() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [resultado, setResultado] = useState(null)

    function calcular() {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        if (isNaN(a) || isNaN(b)) {
            setResultado("Ingrese un numero valido.");
            return;
        }

        setResultado(a / b);
    }

    return (
        <Paper elevation={4} sx={{ p: 3, maxWidth: 420, mx: "auto", mt: 4 }}>
            <Typography variant="h5" textAlign="center" gutterBottom>
                Division
            </Typography>

            <Box display="flex" flexDirection="column" gap={2}>
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
                    Dividir
                </Button>

                {resultado !== null && (
                    <Typography variant="subtitle1" textAlign="center">
                        Resultado: {resultado}
                    </Typography>)}
            </Box>
        </Paper>
    )
}

export default Division;