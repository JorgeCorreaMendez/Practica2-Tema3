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
    alert(`El índice de masa corporal es: ${IMC.toFixed(2)}`);
  }
}

function convertFC() {
  let Fahrenhei = window.prompt("Indica los grados ºF a convertir", "ºF");

  if (Fahrenhei == "") {
    alert("Error, no se ha introducido ningún valor");
  } else if (Number.isNaN(Number.parseInt(Fahrenhei))) {
    alert("Error, debe introducir un valor numérico");
  } else {
    let Celsius = ((parseInt(Fahrenhei) - 32) * 5) / 9;
    alert(`Los grados ${Fahrenhei}°F equivalen a ${Celsius.toFixed(2)}°C`);
  }
}

function camelCase() {
  let texto = window.prompt("Indica el texto separado por - :");
  let letraMayuscula = "";
  let textoSinGuiones = "";

  if (texto == "") {
    alert("Error, no se ha introducido ningún valor");
  } else {
    letraMayuscula = texto.slice(0, 1);
    textoSinGuiones += letraMayuscula.toUpperCase();
    let contador = 1;
    while (contador < texto.length) {
      if (texto.slice(contador, contador + 1) == "-") {
        letraMayuscula = texto.slice(contador + 1, contador + 2);
        textoSinGuiones += letraMayuscula.toUpperCase();
        contador++;
      } else {
        textoSinGuiones += texto.slice(contador, contador + 1);
      }
      contador++;
    }

    alert(textoSinGuiones);
  }
}

function divisibles() {
  let nDivisible = window.prompt(
    "Indica el número del que quieres los divisibles:"
  );
  let nInicial = window.prompt("Indica el valor inicial:");
  let nFinal = window.prompt("Indica el valor final:");

  if (nDivisible == "" || nInicial == "" || nFinal == "") {
    alert("Error, no se ha introducido ningún valor");
  } else if (
    Number.isNaN(Number.parseInt(nDivisible)) ||
    Number.isNaN(Number.parseInt(nDivisible)) ||
    Number.isNaN(Number.parseInt(nFinal))
  ) {
    alert("Error, debe introducir un valor numérico");
  } else {
    parseInt(nDivisible);
    parseInt(nInicial);
    parseInt(nFinal);
    if (nInicial > nFinal) {
      let intercambioV = nInicial;
      nInicial = nFinal;
      nFinal = intercambioV;
    }

    let nsDivisibles = "";

    for (let i = nInicial; i < nFinal; i++) {
      if (i % nDivisible == 0) {
        nsDivisibles += i + ", ";
      }
    }

    nsDivisibles = nsDivisibles.substring(0, nsDivisibles.length - 2);
    alert(`Los números divisibles del número ${nDivisible}
           desde ${nInicial} hasta ${nFinal} son:
           ${nsDivisibles}`);
  }
}

function primos() {
  let cantidadPrimos = window.prompt(
    "Indica cuántos número primos quieres ver:"
  );

  if (cantidadPrimos == "") {
    alert("Error, no se ha introducido ningún valor");
  } else if (Number.isNaN(Number.parseInt(cantidadPrimos))) {
    alert("Error, debe introducir un valor numérico");
  } else if (cantidadPrimos < 1 || cantidadPrimos > 168) {
    alert("Error, fuera de rango");
  } else {
    let numerosPrimos = "";
    let cantidad = 0;
    let contador = 1;

    while (contador <= cantidadPrimos) {
      let primo = true;

      if (cantidad == 0 || cantidad == 1 || cantidad == 4) {
        primo = false;
      }

      for (let x = 2; x < cantidad; x++) {
        if (cantidad % x == 0) {
          primo = false;
        }
      }

      if (primo) {
        numerosPrimos += cantidad + ", ";
        contador++;
      }
      cantidad++;
    }

    numerosPrimos = numerosPrimos.substring(0, numerosPrimos.length - 2);
    alert(`Estos son los primeros ${cantidadPrimos} primos:
    ${numerosPrimos}`);
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
    case 3:
      camelCase();
      break;
    case 4:
      divisibles();
      break;
    case 5:
      primos();
      break;
    default:
      alert("Error, esa opción no esta disponible, vuelva a intentarlo");
      break;
  }
}
