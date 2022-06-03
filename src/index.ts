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

function leerMesesDesaprobados(notasAlumno: number[], meses: string[]): string {
  let mesesDesaprobados: string = " ";
  let indice: number;
  for (indice = 0; indice < notasAlumno.length; indice++) {
    if (notasAlumno[indice] < 6) {
      mesesDesaprobados += meses[indice] + ",";
    }
  }
  return mesesDesaprobados;
}

function menorNota(notasAlumno: number[], meses: string[]) {
  let indice: number;
  for (indice = 0; indice < notasAlumno.length; indice++) {
    if (notasAlumno[indice] < minimaNota) {
      mesMin = meses[indice];
      minimaNota = notasAlumno[indice];
    }
  }
  return "El mes que mas baja nota tuvo es: " + mesMin + " con: " + minimaNota;
}
console.log(leerMesesDesaprobados(notasAlumno, meses));
console.log(menorNota(notasAlumno, meses));
