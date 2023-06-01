document
  .getElementById("formContacto")
  .addEventListener("submit", function (event) {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    var confirmation = confirm("¿Usted está seguro de adoptar?");

    if (!confirmation) {
      alert("Te esperamos cuando estes seguro de adoptar");
      event.preventDefault();
    } else {
      alert("Gracias por adoptar");
      event.preventDefault();
      window.location.href = "https://nicolasc1991.github.io/BaMultiplicaTPFinal/";
    }
  });
