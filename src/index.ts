// Ejercicio 1 de repaso de la clase del Lunes 30/05

let notasAlumno: number[] = [7, 6, 9, 5, 8, 7, 10, 4, 8, 8];
let meses: string[] = [
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];
let mesMin: string;
let minimaNota: number = 11;
let mesMax: string;
let maximaNota: number = -1;
let promedio: number;
let indice: number;

function leerMesesDesaprobados(notasAlumno: number[], meses: string[]): string {
  let mesesDesaprobados: string = " ";
  for (indice = 0; indice < notasAlumno.length; indice++) {
    if (notasAlumno[indice] < 6) {
      mesesDesaprobados += meses[indice] + ",";
    }
  }
  return mesesDesaprobados;
}

function menorNota(notasAlumno: number[], meses: string[]) {
  for (indice = 0; indice < notasAlumno.length; indice++) {
    if (notasAlumno[indice] < minimaNota) {
      mesMin = meses[indice];
      minimaNota = notasAlumno[indice];
    }
  }
  return "El mes que mas baja nota tuvo es: " + mesMin + " con: " + minimaNota;
}
function mayorNota(notasAlumno: number[], meses: string[]) {
  for (indice = 0; indice < notasAlumno.length; indice++) {
    if (notasAlumno[indice] > maximaNota) {
      mesMax = meses[indice];
      maximaNota = notasAlumno[indice];
    }
  }
  return "El mes que mas alta nota tuvo es: " + mesMax + " con: " + maximaNota;
}
function calcularPromedio(notasAlumno: number[], meses: string[]) {
  let sumaTotal: number = 0;
  for (indice = 0; indice < notasAlumno.length; indice++) {
    sumaTotal += notasAlumno[indice];
  }
  promedio = sumaTotal / 10;
  return promedio;
}
console.log("Meses que desaprobo el Alumno");
console.log(leerMesesDesaprobados(notasAlumno, meses));
console.log("Mes en que obtuvo la menor nota");
console.log(menorNota(notasAlumno, meses));
console.log("Mes en el que obtuvo la mayor nota");
console.log(mayorNota(notasAlumno, meses));
console.log("Promedio del Alumno");
console.log(calcularPromedio(notasAlumno, meses));
