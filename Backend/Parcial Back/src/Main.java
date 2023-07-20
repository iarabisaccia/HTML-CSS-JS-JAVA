import DAOH2.OdontologoDAOH2;
import dao.BD;
import model.Odontologo;
import servicios.OdontologoService;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        BD.createTable();
        OdontologoDAOH2 odontologoDaoH2 = new OdontologoDAOH2();

        OdontologoService odontologoService = new OdontologoService();
        odontologoService.setOdontologoIDao(odontologoDaoH2);
        List<Odontologo> odontologosExistentes= new ArrayList<>();

        Odontologo odo1 = new Odontologo(123, "Juan", "Perez");
        Odontologo odo2 = new Odontologo(4563, "Maria", "Flores");
        Odontologo odo3 = new Odontologo(7894, "Pepe", "Argento");

        odontologoService.guardar(odo1);
        odontologoService.guardar(odo2);
        odontologoService.guardar(odo3);

        odontologosExistentes = odontologoService.listarTodos();

        for (Odontologo odontologo : odontologosExistentes) {
            System.out.println(odontologo.toString());
        }

    }
}
