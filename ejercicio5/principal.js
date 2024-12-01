// Ejemplo 5 del taller

const doctores = [
  { id: 1, nombre: "Dra. Garcia", especialidad: "medicina General" },
  { id: 2, nombre: "Dr. Rodriguez", especialidad: "pediatría" },
];

let citas = [];
function agendarCita(paciente, doctorId, fecha, hora) {
  const doctor = doctores.find((d) => d.id === doctorId);
  if (!doctor) {
    return "Doctor no encontrado";
  }
  if (citaExiste(fecha, hora, doctorId)) {
    return "Horario no disponible";
  }

  const nuevaCita = {
    id: citas.length + 1,
    paciente,
    doctor: doctor.nombre,
    fecha,
    hora,
  };

  citas.push(nuevaCita);
  return `Citas agendada para ${paciente} con ${doctor.nombre}`;
}

function verCitasPacientes(paciente) {
  return citas.filter(c.paciente === paciente);
}

function cancelarCitas(citaId) {
  const index = citas.findIndex((c) => c.id === citaId);
  if (index === -1) return "Cita no encontrada ";

  citas.splice(index, 1);
  return "Cita cancelada exitosamente";
}

console.log(agendarCita("Ana Lopez", 1, "2024-11-28", "09:00"));
console.log(verCitasPacientes("Ana Lopez"));
console.log(cancelarCitas(1));
