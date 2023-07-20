package presencial;

public class ManejadorSpam extends Manejador {
    @Override
    public String comprobar(Mail mail) { //devuelvo directamente que se marca como SPAM, porque ya pasó por los manejadores anteriores
        System.out.println("Se marco como SPAM");
        return "mail enviado a SPAM";
    }
}
