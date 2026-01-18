import { useState } from "react";

function Resta() {
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

        setResultado(a - b);
    }

    return (
        <div>

            <h2>Resta</h2>

            <input
            type="number"
            placeholder="numero 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            />

            <input
            type="number"
            placeholder="numero 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            />

            <button onClick={calcular}>Restar</button>

            {resultado !== null && <p>Resultado: {resultado}</p>}
        </div>
    )
}

export default Resta;