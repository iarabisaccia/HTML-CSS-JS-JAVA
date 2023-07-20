package presencial;

public class PeliculaNoHabilitadaExpetion extends Exception{ //extiende de exception
    public PeliculaNoHabilitadaExpetion(String message) { //para darle el msj personalizado
        super(message);
    } //tiene 1 constructor que devuelve 1 mensaje
}
