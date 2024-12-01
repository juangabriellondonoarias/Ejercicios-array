//Ejemplo 6 del taller

// Base de datos de cuentas
const cuentas = [
  { id: 1, usuario: "Juan", pin: "1234", saldo: 1000 },
  { id: 2, usuario: "Ana", pin: "4321", saldo: 2000 },
];

// Historial de transacciones
let transacciones = [];

function consultarSaldo(userId, pin) {
  const cuenta = cuentas.find((c) => c.id === userId && c.pin === pin);
  return cuenta ? cuenta.saldo : "Credenciales inválidas";
}

function retirar(userId, pin, monto) {
  const cuenta = cuentas.find((c) => c.id === userId && c.pin === pin);
  if (!cuenta) return "Credenciales inválidas";
  if (cuenta.saldo < monto) return "Saldo insuficiente";
  if (monto > 1000) return "Excede límite de retiro";

  cuenta.saldo -= monto;
  registrarTransaccion(userId, "retiro", monto);
  return `Retiro exitoso. Nuevo saldo: ${cuenta.saldo}`;
}

function depositar(userId, pin, monto) {
  const cuenta = cuentas.find((c) => c.id === userId && c.pin === pin);
  if (!cuenta) return "Credenciales inválidas";

  cuenta.saldo += monto;
  registrarTransaccion(userId, "deposito", monto);
  return `Depósito exitoso. Nuevo saldo: ${cuenta.saldo}`;
}

function registrarTransaccion(userId, tipo, monto) {
  transacciones.push({
    fecha: new Date().toISOString(),
    userId,
    tipo,
    monto,
  });
}

// Pruebas
console.log(consultarSaldo(1, "1234"));
console.log(retirar(1, "1234", 500));
console.log(depositar(1, "1234", 300));
console.log(transacciones);
