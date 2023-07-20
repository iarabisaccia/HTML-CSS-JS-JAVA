package presencial;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.AssertionsKt;
import org.junit.jupiter.api.Test;

public class EmpleadoTest {
    @Test
    public void pasosAdecuados(){
        //DADO
        Empleado empleadoPrueba= new EmpleadoClasico();
        String mensajeEsperado= "Agregar alimentos";
        //CUANDO
        String mensajeObtenido= empleadoPrueba.indicacionesDeArmardo();
        //ENTONCES
        Assertions.assertEquals(mensajeObtenido, mensajeEsperado);
    }
    @Test
    public void calcularPrecioDelMenu(){
        //DADO
        Empleado empclasico = new EmpleadoClasico();
        Menu menuclasico= new Clasico(2.0);
        double precioEsp= 2.0;

        //CUANDO
        double precioObtenido= empclasico.calcularPrecio(menuclasico);
        //ENTONCES
        Assertions.assertEquals(precioEsp,precioObtenido);
    }
}
