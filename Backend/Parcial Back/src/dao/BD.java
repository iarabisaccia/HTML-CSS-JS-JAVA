package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import org.apache.log4j.Logger;

public class BD {
    private static final String SQL_DROP_CREATE = "DROP TABLE IF EXISTS ODONTOLOGOS; " +
            "CREATE TABLE ODONTOLOGOS (MATRICULA INT PRIMARY KEY, NOMBRE VARCHAR (100) NOT NULL, APELLIDO VARCHAR (100) NOT NULL)";
    private static final Logger LOGGER = Logger.getLogger(BD.class);

    public static void createTable() {
        Connection connection = null;
        try {
            connection = getConnection();
            Statement statement = connection.createStatement();
            statement.execute(SQL_DROP_CREATE);
            LOGGER.info("La tabla ha sido creada");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                connection.close();
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
    }

    public static Connection getConnection() throws Exception {
        Class.forName("org.h2.Driver");
        return DriverManager.getConnection("jdbc:h2:~/ParcialBackend", "sa", "sa");
    }
}
