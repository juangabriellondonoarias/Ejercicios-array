// Echo por mi
const ventas = [
  { producto: "banano", categoria: "Fruta", monto: 150 },
  { producto: "kiwi", categoria: "lacteo", monto: 200 },
  { producto: "pera", categoria: "Fruta", monto: 150 },
  { producto: "chorizo", categoria: "carne", monto: 100 },
  { producto: "sandia", categoria: "Fruta", monto: 300 },
];

const ventasPorCategoria = ventas.reduce((acc, venta) => {
  acc[venta.categoria] = (acc[venta.categoria] || 0) + venta.monto;
  return acc;
}, {});

console.log("ventas por categoria:", ventasPorCategoria);
