// ejercicio 1 Ejemplo del taller

// Datos de carrito
const carrito = [
  { nombre: "lapto", precio: 800, cantidad: 1 },
  { nombre: "mouse", precio: 20, cantidad: 2 },
  { nombre: "teclado", precio: 50, cantidad: 1 },
];

//funcion para calculat total
const calcularTotal = (productos) => {
  return productos.reduce((total, producto) => {
    const subtotal = producto.precio * producto.cantidad;
    return total + subtotal;
  }, 0);
};

// calcular y mostrar resultado
const total = calcularTotal(carrito);
console.log("productos en carrito:", carrito);
console.log("Total a pagar: $" + total);
