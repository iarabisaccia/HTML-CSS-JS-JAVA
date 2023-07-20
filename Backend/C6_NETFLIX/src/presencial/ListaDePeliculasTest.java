package presencial;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class ListaDePeliculasTest {
    @Test
    public void casoCorrecto(){
        //DADO
        IP direccion= new IP(120,50,30,20); //instancia la ip
        ListaDePeliculasProxy proxy= new ListaDePeliculasProxy(direccion); //instanciamos al proxy,porque es ahi en donde se hace la consulta,le manda x parametro la direccion que definimos arriba
        String nombrePelicula="pelicula2"; //nombre de la peli
        String respEsperada="www.elclan.com";
        try{
            Pelicula peliculaBuscada= proxy.getPeliculas(nombrePelicula);
            Assertions.assertEquals(respEsperada,peliculaBuscada.getEnlace());

        }catch (PeliculaNoHabilitadaExpetion e){ //si sale algo mal, llamamos a la excepcion q vuelva
            e.printStackTrace(); //o sea que muestre la excepcion que nosotros creamos.

        }
        //CUANDO
        //ENTONCES
    }

}
