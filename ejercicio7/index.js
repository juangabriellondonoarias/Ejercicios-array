// Echo por mi 

const canchas = [
  { id: 1, tipo: "Fútbol", horarios: ["10:00", "12:00"], ocupado: false },
  { id: 2, tipo: "Tenis", horarios: ["11:00", "13:00"], ocupado: false },
];

function verCanchasDisponibles() {
  return canchas.filter((c) => !c.ocupado);
}

function reservarCancha(id, horario) {
  const cancha = canchas.find((c) => c.id === id);
  if (!cancha) return "Cancha no encontrada";
  if (!cancha.horarios.includes(horario)) return "Horario no disponible";
  if (cancha.ocupado) return "Cancha ya está reservada";

  cancha.ocupado = true;
  return ` Reserva para cancha de ${cancha.tipo} a las ${horario} confirmada.`;
}

// Ejemplo de uso
console.log(verCanchasDisponibles());
console.log(reservarCancha(1, "10:00"));
console.log(verCanchasDisponibles());
