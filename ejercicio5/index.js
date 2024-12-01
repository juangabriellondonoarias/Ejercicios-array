// Echo por mi

const clases = [
  { id: 1, nombre: "Yoga", horario: "8:00 AM" },
  { id: 2, nombre: "Spinning", horario: "9.00 AM" },
];

let reservas = [];
function agendarClase(cliente, claseId) {
  const clase = clases.find((c) => c.id === claseId);
  if (!clase) {
    return "Clase no encontrada";
  }

  const nuevaReserva = {
    cliente,
    clase: clase.nombre,
    horario: clase.horario,
  };
  reservas.push(nuevaReserva);
  return `Reserva para ${cliente} en ${clase.nombre} confirmada.`;
}

function verReservasCliente(cliente) {
  return reservas.filter((r) => r.cliente === cliente);
}
function cancelarReserva(cliente, claseId) {
  reservas = reservas.filter(
    (r) =>
      !(
        r.cliente === cliente &&
        clases.find(c.id === claseId)?.nombre === r.clase
      )
  );
  return "Reserva cancelada";
}

console.log(agendarClase("Juan", 1));
console.log(verReservasCliente("Juan"));
console.log(cancelarReserva("Juan", 1));
