package DAOH2;

import dao.IDao;
import model.Odontologo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import org.apache.log4j.Logger;

public class OdontologoDAOH2 implements IDao<Odontologo> {
    private static final String SQL_INSERT = "INSERT INTO ODONTOLOGOS VALUES (?, ?, ?)";
    private static final String SQL_SELECT = "SELECT * FROM ODONTOLOGOS";

    private static final Logger LOGGER = Logger.getLogger(OdontologoDAOH2.class);

    @Override
    public Odontologo guardar(Odontologo odontologo) {
        LOGGER.info("Incicio del guardado de un medicamento");
        Connection connection = null;
        try {
            connection = getConnection();
            PreparedStatement ps_insert = connection.prepareStatement(SQL_INSERT);
            ps_insert.setInt(1, odontologo.getMatricula());
            ps_insert.setString(2, odontologo.getNombre());
            ps_insert.setString(3, odontologo.getApellido());
            ps_insert.execute();
            ps_insert.close();

            LOGGER.info("Nuevo registro creado en H2: " + odontologo.getNombre() + " " + odontologo.getApellido());
        } catch (Exception ex){
            ex.printStackTrace();
        }
        return odontologo;

    }

    @Override
    public List<Odontologo> listarTodos() {
        LOGGER.info("Incicio del guardado de un medicamento");
        Connection connection = null;

        List<Odontologo> odontologos = new ArrayList<>();

        try {
            connection = getConnection();
            PreparedStatement ps_insert = connection.prepareStatement(SQL_SELECT);

            ResultSet rs = ps_insert.executeQuery();
            LOGGER.info("Ejecución exitosa del listado");

            while (rs.next()) {
                Integer matricula = (int) rs.getLong(1);
                String nombre = rs.getString(2);
                String apellido = rs.getString(3);

                Odontologo odontologo = new Odontologo(matricula, nombre, apellido);

                odontologos.add(odontologo);
            }
            ps_insert.close();
        } catch (Exception ex){
            ex.printStackTrace();
        }

        return odontologos;
    }

    private static Connection getConnection() throws Exception {
        Class.forName("org.h2.Driver");
        return DriverManager.getConnection("jdbc:h2:~/ParcialBackend","sa", "sa");
    }
}
