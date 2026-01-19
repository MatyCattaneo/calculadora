import { Grid } from "@mui/material";
import Suma from './Suma';
import Resta from './Resta';
import Multiplicacion from './Multiplicacion';
import Division from './Division';
import Porcentaje from './Porcentaje';
import IMCCalculator from './IMCCalculator';
import CuantaAguaTomar from './CuantaAguaTomar';
import RangosFrecuenciaCardiaca from './RangosFrecuenciaCardiaca'

function Components() {
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ mt: 4, maxWidth: 1200, mx: "auto"}}>
      {/* Fila 1 */}
      <Grid item xs={12} md={3}><Suma /></Grid>
      <Grid item xs={12} md={3}><Resta /></Grid>
      <Grid item xs={12} md={3}><Multiplicacion /></Grid>
      <Grid item xs={12} md={3}><Division /></Grid>
      {/* Fila 2 */}
      <Grid item xs={12} md={3}><Porcentaje /></Grid>
      <Grid item xs={12} md={3}><IMCCalculator /></Grid>
      <Grid item xs={12} md={3}><CuantaAguaTomar /></Grid>
      <Grid item xs={12} md={3}><RangosFrecuenciaCardiaca /></Grid>
    </Grid>
  )
}

export default Components;