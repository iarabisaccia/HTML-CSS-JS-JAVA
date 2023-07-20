package presencial;

public class ListaDePeliculasProxy implements IGrillaDePeliculas{
    private ListaDePeliculas lista;//para vincularlo con ListaDePeliulas creo el atributo de la lista de pelis
    private IP direccion; //ponemos la direccion del pais de IP, vincula al proxy con la clase IP

    //constructor
    public ListaDePeliculasProxy(IP direccion) {
        lista = new ListaDePeliculas(); //instancia la lista
        this.direccion= direccion; //instancia la direcion
    }

    @Override
    public Pelicula getPeliculas(String nombrePelicula) throws PeliculaNoHabilitadaExpetion {
        Pelicula pelicula = lista.getPeliculas(nombrePelicula); //instancia a la pelicula
        if(!direccion.obtenerPais().equals(pelicula.getPais()))//si NO es = el pais que tiene la direccion ip con el pais que tiene la peli (dice si no es igual porque pone !)
            throw  new PeliculaNoHabilitadaExpetion(pelicula.getNombre()+"Pelicula no disponible en el pais : "+direccion.obtenerPais()); //tira la exepcion y el msj de error
        return pelicula; //sino me devuelve la peli
    }
}
