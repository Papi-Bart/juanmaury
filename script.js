// A. Modelo de datos en memoria (Array de objetos)
const momentosMessi = [
  { id: 1, titulo: "Gol a Francia en la Final del Mundo 2022" },
  { id: 2, titulo: "6to Gol en un El Clásico mostrando la camiseta en el Bernabéu" },
  { id: 3, titulo: "Primer Balón de Oro en 2009" }
];

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  
  // B. Selección de elementos del DOM
  const listaUI = document.getElementById("lista-momentos");
  const inputMomento = document.getElementById("nuevo-momento");
  const btnAgregar = document.getElementById("btn-agregar");
  const formContacto = document.getElementById("form-contacto");
  const respuestaForm = document.getElementById("respuesta-form");
  const spanAnio = document.getElementById("anio");

  // Asignar año actual automáticamente al footer
  spanAnio.textContent = new Date().getFullYear();

  // C. Función para renderizar el modelo de datos en el DOM
  function renderizarMomentos() {
    listaUI.innerHTML = ""; // Limpiar lista antes de re-dibujar

    momentosMessi.forEach((item) => {
      // Manipulación del DOM: createElement
      const li = document.createElement("li");
      li.textContent = item.titulo;

      // Manipulación del DOM: appendChild
      listaUI.appendChild(li);
    });
  }

  // Render inicial al cargar la página
  renderizarMomentos();

  // D. Evento Click para agregar elementos al modelo de datos
  btnAgregar.addEventListener("click", () => {
    const texto = inputMomento.value.trim();

    if (texto !== "") {
      // Insertar en el modelo de datos en memoria
      const nuevoObjeto = {
        id: Date.now(),
        titulo: texto
      };
      momentosMessi.push(nuevoObjeto);

      // Actualizar el DOM
      renderizarMomentos();

      // Limpiar input
      inputMomento.value = "";
    } else {
      alert("Por favor, ingresa un momento válido.");
    }
  });

  // E. Evento Submit en Formulario con preventDefault() y Validación
  formContacto.addEventListener("submit", (e) => {
    // Evita que la página se recargue al enviar el formulario
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;

    // Simulación de respuesta exitosa
    respuestaForm.textContent = `¡Gracias ${nombre}! Tu mensaje ha sido registrado exitosamente.`;

    // Limpiar formulario
    formContacto.reset();
  });
});