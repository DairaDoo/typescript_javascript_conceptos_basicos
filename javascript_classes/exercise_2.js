class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.ancho * this.alto;
    }
}

const cuadrado = new Rectangulo(10, 10);
console.log(cuadrado.area);