//Ejercicio del taller

const ventas = [
	{ producto: "manzanas", categoria: "frutas", monto: 150 },
	{ producto: "leche", categoria: "lacteos", monto: 200 },
	{ producto: "peras", categoria: "frutas", monto: 100 },
	{ producto: "queso", categoria: "lecteos", monto: 300 },
	{ producto: "yogurt", categoria: "lacteos", monto: 100 },
];

const ventasPorCategoria = ventas.reduce((acc, venta) => {
	acc[venta.categoria] = (acc[venta.categoria] || 0) + venta.monto;
	return acc;
}, {});

console.log("ventas por categoria:", ventasPorCategoria);
