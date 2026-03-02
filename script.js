fetch("data.json")
  .then(response => response.json())
  .then(data => {

    document.getElementById("nombre").textContent = data.nombre;
    document.getElementById("descripcion").textContent = data.descripcion;

    const lista = document.getElementById("habilidades");

    data.habilidades.forEach(habilidad => {
      const li = document.createElement("li");
      li.textContent = habilidad;
      lista.appendChild(li);
    });

  })
  .catch(error => console.error("Error cargando JSON:", error));