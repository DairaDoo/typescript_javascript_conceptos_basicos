// Clase Básica
// class Perro {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
// }

// Clase Anónima
let Perro = class {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let perro1 = new Perro("Dylan", 22)

console.log("Nombre: ", perro1.nombre)
console.log("Edad: ", perro1.edad)


// Clase Nombrada
let OtroPerro = class Perro2 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let perro2 = new OtroPerro("Dylan", 22)
console.log(perro1.nombre);
console.log(perro1.edad);