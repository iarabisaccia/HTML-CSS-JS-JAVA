package presencial;

public class ManejadorComercial extends Manejador{
    @Override
    public String comprobar(Mail mail) {
        if(mail.getDestino().equals("comercial@colmena.com")||mail.getTema().equals("Comercial")){ //si el destino del mail es el de colmena o el tema es comercial
            System.out.println("Lo atenderá en minutos el sector Comercial"); //lo atiende el comercial
            return "Usted está siendo atendido por la gente de Comercial";
                    }
        else {
            System.out.println("Mail paso por Comercial"); //avisa que pasó el mail por comercial
            return getSiguienteManejador().comprobar(mail); //y lo pasa al siguiente manejador
        }

    }
}
