class Dado {
    lanzar() {
        return Math.ceil(Math.random() * 6);
    }
}
class Jugador {
    constructor(nombre) {
        this.nombre = nombre
        this.posicion = 0
        this.avance = 0
    }
    avanzar(resultado) {
        this.avance = resultado + this.posicion
        return this.avance
    }
}
class Tablero {
    verificarCasilla(casilla) {
        switch (casilla) {
            case 6: //Escalera 1
                return 13;
            case 16: //Escalera 2
                return 21;
            case 20: //Escalera 3
                return 25;
            case 29: //Escalera 4
                return 37;
            case 40: //Escalera 5
                return 49;
            case 52: //Escalera 6
                return 60;
            case 66: //Escalera 7
                return 72;
            case 70: //Escalera 8
                return 80;
            case 90: //Serpiente 1
                return 30;
            case 75: //Serpiente 2
                return 40;
            case 61: //Serpiente 3
                return 48;
            case 50: //Serpiente 4
                return 3;
            case 43: //Serpiente 5
                return 22;
            case 33: //Serpiente 6
                return 19;
            case 18: //Serpiente 7
                return 10;
            case 9: //Serpiente 8
                return 5;
            default:
                return casilla
        }
    }
}
let dado = new Dado();
let tablero = new Tablero();
let J1 = new Jugador('Hector');
let J2 = new Jugador('Carlos');
while (J1.posicion <= 100 && J2.posicion <= 100) {
    J1.posicion = tablero.verificarCasilla(J1.avanzar(dado.lanzar()));
    J2.posicion = tablero.verificarCasilla(J2.avanzar(dado.lanzar()));
    console.log(`${J1.nombre} avanzó a: ${J1.posicion} | ${J2.nombre} avanzó a: ${J2.posicion}`);
}
if (J1.posicion >= 100) {
    console.log(`¡${J1.nombre} ganó!`);
} else if (J2.posicion >= 100) {
    console.log(`¡${J2.nombre} ganó!,SIUUUU!`);
}