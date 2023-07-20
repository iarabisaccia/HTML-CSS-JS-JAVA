package com.digitalhouse2.integradora.nueve.ejercicio2;

public class Ropa {


    private String tipo;

    private String talle;
    private boolean esNueva;
    private boolean importada;

    public Ropa(String tipo) {
        this.tipo = tipo;
    }

    public String getTipo() {
        return tipo;
    }

    public String getTalle() {
        return talle;
    }

    public void setTalle(String talle) {
        this.talle = talle;
    }

    public boolean isEsNueva() {
        return esNueva;
    }

    public void setEsNueva(boolean esNueva) {
        this.esNueva = esNueva;
    }

    public boolean isImportada() {
        return importada;
    }

    public void setImportada(boolean importada) {
        this.importada = importada;
    }
}
