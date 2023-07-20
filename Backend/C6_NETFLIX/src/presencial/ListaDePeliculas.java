package presencial;

public class ListaDePeliculas implements IGrillaDePeliculas { //te da las películas nomas, el filtro esta en el proxy
    @Override
    public Pelicula getPeliculas(String nombrePelicula) throws PeliculaNoHabilitadaExpetion {
        Pelicula peliculaRespuesta= null; //defino a la peliculaRespesta = null, que empiece por el "no tiene nada"
        switch (nombrePelicula){ //trae x parametro el nombre de la peli
            case "pelicula1":
                peliculaRespuesta= new Pelicula("Mario","Brasil","www.mariolapelicula.com"); //instancia una película nueva
                break;
            case "pelicula2":
                peliculaRespuesta= new Pelicula("el clan","Argentina","www.elclan.com");
                break;
            case   "pelicula3":
                peliculaRespuesta= new Pelicula("Roma","Colombia","www.roma.com");
                break;

        }
        return peliculaRespuesta; //devuelve la pelicula
    }
}
