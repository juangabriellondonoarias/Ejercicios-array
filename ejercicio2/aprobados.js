//Ejemplo del taller

// Lista de estudiantes
const estudiantes = [
  { nombre: "ana", nota: 8.5 },
  { nombre: "juan", nota: 6.5 },
  { nombre: "maria", nota: 9.0 },
  { nombre: "pedro", nota: 5.8 },
  { nombre: "luis", nota: 7.2 },
];

// filtrar apodos
const aprobados = estudiantes
  .filter((estudiante) => estudiante.nota >= 7)
  .map((estudiante) => estudiante.nombre);

console.log("Estudiante aprobados :", aprobados);
