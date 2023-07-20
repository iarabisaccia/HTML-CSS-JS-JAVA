package servicios;

import dao.IDao;
import model.Odontologo;

import java.util.List;

public class OdontologoService {
    private IDao<Odontologo> odontologoIDao;

    public void setOdontologoIDao(IDao<Odontologo> odontologoIDao) {
        this.odontologoIDao = odontologoIDao;
    }

    public Odontologo guardar(Odontologo odontologo) {
        Odontologo guardar = odontologoIDao.guardar(odontologo);
        return guardar;
    }

    public List<Odontologo> listarTodos() {
        return odontologoIDao.listarTodos();
    }
}
