package com.digitalhouse2.integradora.nueve.ejercicio2;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FlyweightTest {

  @Test
    void getTamanoFabrica() {
        Ropa ropa = FlyweightFactory.obtenerRopa("pantalon");
        ropa.setTalle("XS");
        Ropa ropa1 = FlyweightFactory.obtenerRopa("pantalon");
        ropa1.setImportada(true);
        Ropa ropa2 = FlyweightFactory.obtenerRopa("pantalon");
        ropa2.setTalle("S");
        Ropa ropa3 = FlyweightFactory.obtenerRopa("pantalon");
        ropa3.setTalle("M");
        Ropa ropa4 = FlyweightFactory.obtenerRopa("pantalon");
        ropa4.setEsNueva(false);
        Ropa ropa5 = FlyweightFactory.obtenerRopa("remera");
        ropa5.setEsNueva(true);
        Ropa ropa6 = FlyweightFactory.obtenerRopa("remera");
        ropa6.setTalle("L");

        assertEquals(FlyweightFactory.ropaMap.size() == 2, true);
    }

    @Test
    void getTipoSetters() {
        Ropa ropa = FlyweightFactory.obtenerRopa("pantalon");
        ropa.setImportada(true);
        ropa.setTalle("XS");
        ropa.setEsNueva(false);

        assertEquals(ropa.isImportada(), true);
        assertEquals(ropa.isEsNueva(), false);
        assertEquals(ropa.getTalle(), "XS");
        assertEquals(ropa.getTipo(), "pantalon");
    }

}
