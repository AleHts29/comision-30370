let usuario = prompt("Ingrese suscripcion \n _Premium\n_Basico");

let sistemaPago = prompt("Ingrese sistema de pago \n _Debito\n_Credito");

function descuento(sistemaPago, monto) {
  let Total = 0;

  switch (sistemaPago) {
    case "Debito":
      Total = monto * 0.9;
      break;

    default:
      Total = monto * 1.1;

      break;
  }

  return Total.toFixed(2);
}

let valorProducto;
let total;
if (usuario == "Basico") {
  valorProducto = 1000;
  alert(`El producto cuesta $${valorProducto}`);
  total = descuento(sistemaPago, valorProducto);
  alert(`El total a pagar es ${total}`);
} else {
  valorProducto = 1500;
  alert(`El producto cuesta $${valorProducto}`);
  total = descuento(sistemaPago, valorProducto);
  alert(`El total a pagar es ${total}`);
}
