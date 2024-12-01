//Echo por mi

// Lista de estudiantes
const estudiantes1 = [
  { nombre: "juanes", nota: 8.9 },
  { nombre: "pablo", nota: 9.5 },
  { nombre: "trujillo", nota: 3.2 },
  { nombre: "changa", nota: 4.5 },
  { nombre: "luis", nota: 6.7 },
  { nombre: "sofia", nota: 8.9 },
  { nombre: "samuel", nota: 2.2 },
  { nombre: "salo", nota: 8.0 },
];
// filtrar apodos
const aprobados1 = estudiantes1
  .filter((estudiante) => estudiante.nota >= 7)
  .map((estudiante) => estudiante.nombre);

console.log("Estudiante aprobados:", aprobados1);

const aprobados2 = estudiantes1
  .filter((estudiante) => estudiante.nota <= 7)
  .map((estudiante) => estudiante.nombre);
console.log("Estudiante no aprobados:", aprobados2);
