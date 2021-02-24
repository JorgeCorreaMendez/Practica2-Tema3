function IMC() {
  let kg = window.prompt("Indica el peso en Kilogramos", "kg");
  let m = window.prompt("Indica la altura en centímetros", "cm");

  if (kg == "" || m == "") {
    alert("Error, no se ha introducido ningún valor");
  } else if (
    Number.isNaN(Number.parseInt(kg)) ||
    Number.isNaN(Number.parseInt(m))
  ) {
    alert("Error, debe introducir un valor numérico");
  } else {
    m = parseFloat(m) / 100;
    kg = parseInt(kg);

    let IMC = kg / Math.pow(m, 2);
    alert(`El índice de masa corporal es: ${IMC}`);
  }
}

function convertFC() {
  let fahrenheit = window.prompt("Indica los grados ºF a convertir", "ºF");

  if (fahrenheit == "") {
    alert("Error, no se ha introducido ningún valor");
  } else if (Number.isNaN(Number.parseInt(fahrenheit))) {
    alert("Error, debe introducir un valor numérico");
  } else {
    let Celsius = ((parseInt(fahrenheit) - 32) * 5) / 9;
    alert(`Los grados ${fahrenheit}°F equivalen a ${Celsius}°C`);
  }
}

const final = 0;
let opcion = 1;

while (opcion != final) {
  opcion = window.prompt(`Seleccionar una opción:
                                0.- Finalizar programa
                                1.- IMC
                                2.- Grados Fahrenheir a Celius
                                3.- camelCase
                                4.- Divisibles 
                                5.- Primo
                            `);
  opcion = parseInt(opcion);

  switch (opcion) {
    case final:
      alert("Finalizando programa");
      break;
    case 1:
      IMC();
      break;
    case 2:
      convertFC();
      break;
    default:
      alert("Error, esa opción no esta disponible, vuelva a intentarlo");
      break;
  }
}
