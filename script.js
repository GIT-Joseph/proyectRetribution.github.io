fetch("data.json")
  .then(response => response.json())
  .then(data => {

    document.getElementById("nombre").textContent = data.nombre;
    document.getElementById("descripcion").textContent = data.descripcion;

  })
  .catch(error => console.error("Error cargando JSON:", error));

function redirigir() {
  const valor = document.getElementById("busqueda").value.trim();

  if (valor !== "") {
    window.location.href = "resultado.html?nombre=" + encodeURIComponent(valor);
  }
}

document.getElementById("busqueda").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    redirigir();
  }
});