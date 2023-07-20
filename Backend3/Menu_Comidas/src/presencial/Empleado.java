package presencial;

public abstract class Empleado {
    public String preparar(Menu menu){
        String resp=iniciandoPreparacion();
        resp= resp+indicacionesDeArmardo();
        resp= resp+calcularPrecio(menu);
    return resp;
    }
    private String iniciandoPreparacion(){
        return "enceder la hornalla y reunior todo lo necesario para la coccion";
    }
    protected abstract String indicacionesDeArmardo(Menu menu);
    protected abstract String indicacionesDeArmardo();
    protected abstract Double calcularPrecio(Menu menu);
}
