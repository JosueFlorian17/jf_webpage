function showModal(link) {
    // Asigna el enlace recibido al atributo src del iframe
    document.getElementById("modalIframe").src = link;
    // Muestra el modal cambiando su display a "flex"
    document.getElementById("customAlert").style.display = "flex";
    // Añade el evento para cerrar el modal al pulsar el botón
    document.getElementById("closeModal").addEventListener("click", closeModal);
  }

  function closeModal() {
    // Oculta el modal
    document.getElementById("customAlert").style.display = "none";
    // Limpia el src del iframe para detener el contenido si es necesario
    document.getElementById("modalIframe").src = "";
    // Remueve el event listener del botón para evitar múltiples asignaciones
    document.getElementById("closeModal").removeEventListener("click", closeModal);
  }