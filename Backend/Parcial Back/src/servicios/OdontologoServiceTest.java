package servicios;

import DAOH2.OdontologoDAOList;
import model.Odontologo;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;

import java.util.ArrayList;
import java.util.List;

public class OdontologoServiceTest {

    @Test
    public void Test() {

        List<Odontologo> odontologoEsperado = new ArrayList<>();
        List<Odontologo> odontologos;
        OdontologoDAOList odontologoDAOList = new OdontologoDAOList();


        OdontologoService odontologoService = new OdontologoService();


        Odontologo odo1 = new Odontologo(123, "Juan", "Perez");
        Odontologo odo2 = new Odontologo(4563, "Maria", "Flores");
        Odontologo odo3 = new Odontologo(7894, "Pepe", "Argento");

        OdontologoService.guardar(odo1);
        odontologoService.guardar(odo2);
        odontologoService.guardar(odo3);


        odo1.setMatricula(1);
        odo2.setMatricula(2);
        odo3.setMatricula(3);

        odontologoEsperado.add(odo1);
        odontologoEsperado.add(odo2);
        odontologoEsperado.add(odo3);

        odontologos = odontologoService.listarTodos();

        Assertions.assertEquals(odontologos.size(), odontologoEsperado.size());
    }


}