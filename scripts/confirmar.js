function confirmarEnvio() {
  if (confirm("¿Esta seguro de adoptar?!") == true) {
    alert("Gracias por adoptar")
  } else {
    alert("Te esperamos cuando estes seguro de adoptar")
    window.location.href = "https://nicolasc1991.github.io/BaMultiplicaTPFinal/";
  }
}
