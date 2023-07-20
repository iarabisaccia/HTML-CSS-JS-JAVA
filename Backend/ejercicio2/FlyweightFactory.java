package com.digitalhouse2.integradora.nueve.ejercicio2;

import java.util.HashMap;

public class FlyweightFactory {

    public static final HashMap<String, Ropa> ropaMap = new HashMap<>();

    public static Ropa obtenerRopa(String tipo) {
        Ropa ropa= ropaMap.get(tipo);
        if(ropa == null) {
            ropa = new Ropa(tipo);
            ropaMap.put(tipo, ropa);
        }

        return ropa;
    }
}
