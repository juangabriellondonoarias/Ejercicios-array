// hecho por mi

// datos de carrito
const carrito1 = [
  { nombre: "manzana", precio: 100, cantidad: 3 },
  { nombre: "peras", precio: 80, cantidad: 2 },
  { nombre: "fresas", precio: 120, cantidad: 1 },
];

// funcion para calcular total
const calcularTotal1 = (productos) => {
  return productos.reduce((total, producto) => {
    const subtotal = producto.precio * producto.cantidad;
    return total + subtotal;
  }, 0);
};

//calcular y mostrar el resultado
const total = calcularTotal1(carrito1);
console.log("productos en carrito:", carrito1);
console.log("Total a pagar: $" + total);
