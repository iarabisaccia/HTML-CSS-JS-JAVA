package presencial;

public class EmpleadoClasico extends Empleado {


    @Override
    protected String indicacionesDeArmardo(Menu menu) {
        return "Aregar los ingrendientes del menu clasico";
    }

    @Override
    protected String indicacionesDeArmardo() {
        return "Aregar los ingrendientes del menu clasico";
    }

    @Override
    protected Double calcularPrecio(Menu menu) {
        return menu.getPrecioBase();
    }
}
