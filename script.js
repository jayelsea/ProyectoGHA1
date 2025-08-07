function mostrarAlerta() {
    alert("¡Hola! Has hecho clic en el botón.");
  }
  
  function cambiarColor() {
    document.body.style.backgroundColor = 
      document.body.style.backgroundColor === "white" ? "#f4f4f9" : "white";
  }
  
  document.getElementById("contactoForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
  
    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    alert("Formulario enviado con éxito. ¡Gracias por contactarnos!");
    this.reset(); // Limpia el formulario
  });
  