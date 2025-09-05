// JavaScript básico para La Biblioteca de Merlin

// Variables globales
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
const totalCarrito = 0

// Función para inicializar la aplicación
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] La Biblioteca de Merlin - JavaScript cargado")

  // Inicializar funcionalidades
  inicializarCarrito()
  inicializarBuscador()
  inicializarFormularios()
  inicializarEfectos()

  // Actualizar contador del carrito
  actualizarContadorCarrito()
})

// Funciones del carrito
function inicializarCarrito() {
  // Agregar event listeners a botones de "Agregar al carrito"
  const botonesAgregar = document.querySelectorAll(".btn-agregar-carrito")
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", function (e) {
      e.preventDefault()
      const libroId = this.getAttribute("data-libro-id")
      const libroTitulo = this.getAttribute("data-libro-titulo")
      const libroPrecio = Number.parseFloat(this.getAttribute("data-libro-precio"))

      agregarAlCarrito(libroId, libroTitulo, libroPrecio)
    })
  })
}

function agregarAlCarrito(id, titulo, precio) {
  // Verificar si el libro ya está en el carrito
  const itemExistente = carrito.find((item) => item.id === id)

  if (itemExistente) {
    itemExistente.cantidad += 1
  } else {
    carrito.push({
      id: id,
      titulo: titulo,
      precio: precio,
      cantidad: 1,
    })
  }

  // Guardar en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito))

  // Actualizar UI
  actualizarContadorCarrito()
  mostrarNotificacion(`"${titulo}" agregado al carrito`)

  console.log("[v0] Producto agregado al carrito:", titulo)
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter((item) => item.id !== id)
  localStorage.setItem("carrito", JSON.stringify(carrito))
  actualizarContadorCarrito()

  // Si estamos en la página del carrito, recargar la vista
  if (window.location.pathname.includes("carrito")) {
    location.reload()
  }
}

function actualizarCantidad(id, nuevaCantidad) {
  const item = carrito.find((item) => item.id === id)
  if (item) {
    if (nuevaCantidad <= 0) {
      eliminarDelCarrito(id)
    } else {
      item.cantidad = nuevaCantidad
      localStorage.setItem("carrito", JSON.stringify(carrito))
      actualizarContadorCarrito()
    }
  }
}

function actualizarContadorCarrito() {
  const contador = document.getElementById("cart-counter")
  if (contador) {
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0)
    contador.textContent = totalItems
    contador.style.display = totalItems > 0 ? "flex" : "none"
  }
}

function calcularTotalCarrito() {
  return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0)
}

// Funciones del buscador
function inicializarBuscador() {
  const buscador = document.getElementById("buscador-productos")
  if (buscador) {
    buscador.addEventListener("input", function () {
      const termino = this.value.toLowerCase()
      filtrarProductos(termino)
    })
  }
}

function filtrarProductos(termino) {
  const productos = document.querySelectorAll(".producto-item")
  productos.forEach((producto) => {
    const titulo = producto.querySelector(".producto-titulo").textContent.toLowerCase()
    const autor = producto.querySelector(".producto-autor").textContent.toLowerCase()

    if (titulo.includes(termino) || autor.includes(termino)) {
      producto.style.display = "block"
    } else {
      producto.style.display = "none"
    }
  })

  console.log("[v0] Filtrado productos con término:", termino)
}

// Funciones de formularios
function inicializarFormularios() {
  // Formulario de contacto
  const formularioContacto = document.getElementById("formulario-contacto")
  if (formularioContacto) {
    formularioContacto.addEventListener("submit", (e) => {
      e.preventDefault()
      procesarFormularioContacto()
    })
  }

  // Formulario de newsletter
  const formularioNewsletter = document.getElementById("formulario-newsletter")
  if (formularioNewsletter) {
    formularioNewsletter.addEventListener("submit", (e) => {
      e.preventDefault()
      procesarFormularioNewsletter()
    })
  }
}

function procesarFormularioContacto() {
  const nombre = document.getElementById("nombre").value
  const email = document.getElementById("email").value
  const mensaje = document.getElementById("mensaje").value

  // Validación básica
  if (!nombre || !email || !mensaje) {
    mostrarNotificacion("Por favor, completa todos los campos obligatorios", "error")
    return
  }

  // Simular envío
  mostrarNotificacion("¡Mensaje enviado correctamente! Te responderemos pronto.", "success")
  document.getElementById("formulario-contacto").reset()

  console.log("[v0] Formulario de contacto enviado:", { nombre, email, mensaje })
}

function procesarFormularioNewsletter() {
  const email = document.getElementById("newsletter-email").value

  if (!email || !validarEmail(email)) {
    mostrarNotificacion("Por favor, ingresa un email válido", "error")
    return
  }

  mostrarNotificacion("¡Te has suscrito correctamente al newsletter!", "success")
  document.getElementById("formulario-newsletter").reset()

  console.log("[v0] Suscripción al newsletter:", email)
}

// Funciones de efectos y animaciones
function inicializarEfectos() {
  // Efecto parallax suave en el hero
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const hero = document.querySelector(".hero-section")
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })

  // Animación de aparición de elementos
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in")
      }
    })
  })

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el)
  })
}

// Funciones de utilidad
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

function mostrarNotificacion(mensaje, tipo = "info") {
  // Crear elemento de notificación
  const notificacion = document.createElement("div")
  notificacion.className = `notificacion notificacion-${tipo}`
  notificacion.textContent = mensaje

  // Estilos
  notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${tipo === "error" ? "#ef4444" : tipo === "success" ? "#10b981" : "#8b5cf6"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `

  document.body.appendChild(notificacion)

  // Eliminar después de 3 segundos
  setTimeout(() => {
    notificacion.style.animation = "slideOut 0.3s ease"
    setTimeout(() => {
      document.body.removeChild(notificacion)
    }, 300)
  }, 3000)
}

function formatearPrecio(precio) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(precio)
}

// Funciones específicas para cada página
function inicializarPaginaProductos() {
  // Filtros de categoría
  const filtrosCategorias = document.querySelectorAll(".filtro-categoria")
  filtrosCategorias.forEach((filtro) => {
    filtro.addEventListener("click", function () {
      const categoria = this.getAttribute("data-categoria")
      filtrarPorCategoria(categoria)
    })
  })
}

function filtrarPorCategoria(categoria) {
  const productos = document.querySelectorAll(".producto-item")
  productos.forEach((producto) => {
    const categoriaProducto = producto.getAttribute("data-categoria")

    if (categoria === "todos" || categoriaProducto === categoria) {
      producto.style.display = "block"
    } else {
      producto.style.display = "none"
    }
  })

  console.log("[v0] Filtrado por categoría:", categoria)
}

// Agregar estilos CSS para animaciones
const estilosAnimaciones = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
        animation: fadeIn 0.6s ease forwards;
    }
`

// Agregar estilos al head
const styleSheet = document.createElement("style")
styleSheet.textContent = estilosAnimaciones
document.head.appendChild(styleSheet)

// Exportar funciones para uso global
window.BibliotecaMerlin = {
  agregarAlCarrito,
  eliminarDelCarrito,
  actualizarCantidad,
  mostrarNotificacion,
  formatearPrecio,
}
