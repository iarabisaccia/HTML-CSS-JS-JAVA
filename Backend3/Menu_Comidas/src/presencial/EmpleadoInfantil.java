package presencial;

public class EmpleadoInfantil extends Empleado {

    @Override
    protected String indicacionesDeArmardo(Menu menu) {
        return "Estamos preparando el almuerzo, agregue los ingrentes necesarios";
    }

    @Override
    protected String indicacionesDeArmardo() {
        return "Aregar los ingrendientes del menu infantil";
    }

    @Override
    protected Double calcularPrecio(Menu menu) {
        Double resp= menu.getPrecioBase();
        if(menu instanceof Infantil){
            Infantil menuinf= (Infantil) menu;
            //if(menuinf.equals(menuinf.getCantDeJuguetes(0))
            resp= resp+(3*menuinf.getCantDeJuguetes());
        }
        return resp;
    }
}
