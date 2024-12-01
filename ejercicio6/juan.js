// Echo por mi

const libros = [
  { id: 1, titulo: "1984", disponible: true },
  { id: 2, titulo: "Cien Años de Soledad", disponible: false },
  { id: 3, titulo: "El Principito", disponible: true },
];

function consultarDisponibilidad() {
  return libros.filter((libro) => libro.disponible);
}

function prestarLibro(id) {
  const libro = libros.find((l) => l.id === id);
  if (!libro) return "Libro no encontrado";
  if (!libro.disponible) return "Libro no disponible";

  libro.disponible = false;
  return `Préstamo del libro "${libro.titulo}" registrado.`;
}

function devolverLibro(id) {
  const libro = libros.find((l) => l.id === id);
  if (!libro) return "Libro no encontrado";

  libro.disponible = true;
  return `Devolución del libro "${libro.titulo}" registrada.`;
}

// Ejemplo de uso
console.log(consultarDisponibilidad());
console.log(prestarLibro(3));
console.log(devolverLibro(2));
