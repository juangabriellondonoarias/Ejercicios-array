// Echo por mi
const habitaciones = [
  { numero: 101, tipo: "Grupal", precio: 300, ocupada: false },
  { numero: 102, tipo: "doble", precio: 150, ocupada: false },
  { numero: 103, tipo: "individual", precio: 100, ocupada: false },
];
//regristo de reservas

let reservas = [];

// Funcion para hacer una resrva
function reservaHabitacion(
  numeroHabitacion,
  huesped,
  fechaIngrseo,
  fechaSalida
) {
  const habitacion = habitaciones.find((h) => h.numero === numeroHabitacion);

  if (!habitacion) {
    return `la habitacion ${numeroHabitacion} no existe`;
  }

  if (habitacion.ocupada) {
    return `la habitacion ${numeroHabitacion} ya esta ocupada`;
  }

  habitacion.ocupada = true;

  const nuevaReserva = {
    id: reservas.length + 1,
    habitacion: numeroHabitacion,
    huesped,
    fechaIngrseo,
    fechaSalida,
  };

  reservas.push(nuevaReserva);
  return `Reserva confirmada para ${huesped} en habitacion ${numeroHabitacion}`;
}

// funcion para ver habitaciones disponibles
function verDisponibles() {
  return habitaciones((h) => !h.ocupada);
}

// funcion para cancelar reserva
function cancelarReserva(numeroHabitacion) {
  const habitacion = habitaciones.find((h) => h.numero === numeroHabitacion);

  if (!habitacion) {
    return `La habitacion ${numeroHabitacion} no existe`;
  }

  if (!habitacion.ocupada) {
    return `La habitacion ${numeroHabitacion} ya esta libre`;
  }

  habitacion.ocupada = false;
  reservas = reservas.filter((r) => r.habitacion !== numeroHabitacion);
  return `Reserva cancelada para la habitacion ${numeroHabitacion}`;
}

//ejemplos de uso
console.log(verDisponibles());
console.log(
  reservaHabitacion(
    101,
    "Camilo trujillo",
    "juan perez",
    "samuel lopez",
    "2024-12-07",
    "2024-12-09"
  )
);
console.log(verDisponibles());
console.log(cancelarReserva(101));
console.log(verDisponibles());
