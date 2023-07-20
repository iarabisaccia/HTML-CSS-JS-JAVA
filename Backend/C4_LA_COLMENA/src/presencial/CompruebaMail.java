package presencial;

public class CompruebaMail { //es la clase cadena - se encarga de correr la cadena manejador
    private Manejador inicial; //definimos a inicial

    public CompruebaMail() { //es lo que hace que se pase de un manejador al otro
        inicial= new ManejadorGerencial(); //genera/instancia a los manejadores, empieza desde el gerencial, pero puede empezar desde cualquiera
        Manejador tecnico= new ManejadorTecnico();
        Manejador comercial = new ManejadorComercial();
        Manejador spam= new ManejadorSpam();
        inicial.setSiguienteManejador(tecnico); //si empieza en gerencial, o sea el inicial es gerencial, lo manda a técnico, por eso gerencial no está
        tecnico.setSiguienteManejador(comercial);
        comercial.setSiguienteManejador(spam);
    }
    public String compruebaMail(Mail mail){
        return inicial.comprobar(mail);
    } //método que va a mover la cadena

    public Manejador getInicial() {
        return inicial;
    }

    public void setInicial(Manejador inicial) {
        this.inicial = inicial;
    }
}
