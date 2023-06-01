function confirmarEnvio() {
  if (confirm("¿Esta seguro de adoptar?!") == true) {
    alert("Gracias por adoptar")
  } else {
    alert("Te esperamos cuando estes seguro de adoptar")
    location.reload();
  }
}
