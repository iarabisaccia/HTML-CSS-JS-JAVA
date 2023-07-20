package presencial;

public class IP {

    //divide el nro de la IP en 4 integers para poder usar el 1er número
    private Integer numero1;
    private Integer numero2;
    private Integer numero3;
    private Integer numero4;

    //constructor
    public IP(Integer numero1, Integer numero2, Integer numero3, Integer numero4) {
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.numero3 = numero3;
        this.numero4 = numero4;
    }

    //getters y setters
    public Integer getNumero1() {
        return numero1;
    }

    public void setNumero1(Integer numero1) {
        this.numero1 = numero1;
    }

    public Integer getNumero2() {
        return numero2;
    }

    public void setNumero2(Integer numero2) {
        this.numero2 = numero2;
    }

    public Integer getNumero3() {
        return numero3;
    }

    public void setNumero3(Integer numero3) {
        this.numero3 = numero3;
    }

    public Integer getNumero4() {
        return numero4;
    }

    public void setNumero4(Integer numero4) {
        this.numero4 = numero4;
    }

    //hace 1 método para saber de que país es esa IP
    public String obtenerPais(){
        if(numero1<=49){
            return "Argentina";}
        else if (numero1<=99) {
            return "Brasil";
        }
        else if (numero1<=149) {
            return "Colombia";

        }else {
            return "otros";
        }

    }
    }
