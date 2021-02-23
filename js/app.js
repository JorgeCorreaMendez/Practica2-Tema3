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
  
      let IMC = kg / Math.pow(m);
      alert(`El índice de masa corporal es: ${IMC}`);
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

        break;
    default:
      alert("Error, esa opción no esta disponible, vuelva a intentarlo");
      break;
  }
}



