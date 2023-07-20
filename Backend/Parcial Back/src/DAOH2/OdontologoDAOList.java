package DAOH2;

import dao.IDao;
import model.Odontologo;

import java.util.ArrayList;
import java.util.List;
import org.apache.log4j.Logger;

public class OdontologoDAOList implements IDao<Odontologo> {

    public static final Logger LOGGER = Logger.getLogger(OdontologoDAOList.class);
    private List<Odontologo> odontologos = new ArrayList<>();

    @Override
    public Odontologo guardar(Odontologo odontologo) {
        LOGGER.info("Guardamos un odontologo con matricula: " + odontologo.getMatricula());
        odontologos.add(odontologo);
        return odontologo;
    }

    @Override
    public List<Odontologo> listarTodos() {
        LOGGER.info("Ejecución exitosa del listado");
        return odontologos;
    }
}
