function mostrarObjetivo() {
    const parrafo = document.getElementById('objetivo-text');
    if (parrafo.style.display === "none") {
        parrafo.style.display = "block";
    } else {
        parrafo.style.display = "none";
    }
}

document.getElementById("mostrarSecciones").addEventListener("click", function() {
    var secciones = document.getElementById("secciones");
    if (secciones.style.display === "none") {
        secciones.style.display = "flex";  // Muestra las secciones
    } else {
        secciones.style.display = "none";  // Oculta las secciones
    }
});

// Función para aumentar o disminuir la cantidad
function cambiarCantidad(cambio) {
    const precioUnitario = 200;  // Precio por unidad
    const ivaPorcentaje = 0.16;  // IVA al 16%
    
    // Obtener la cantidad actual
    let cantidad = parseInt(document.getElementById('cantidad').value);
    
    // Cambiar la cantidad según el botón presionado
    cantidad += cambio;
    
    // Asegurarse de que la cantidad no sea menor a 1
    if (cantidad < 1) {
        cantidad = 1;
    }
    
    // Actualizar el valor de la cantidad en el campo
    document.getElementById('cantidad').value = cantidad;
    
    // Calcular el precio total
    let precioTotal = precioUnitario * cantidad;
    
    // Calcular IVA
    let iva = precioTotal * ivaPorcentaje;
    
    // Calcular el total
    let total = precioTotal + iva;
    
    // Actualizar los valores en la página
    document.getElementById('iva').textContent = iva.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}

// Identificamos todas las secciones que necesitan la animación
const sections = [
    document.getElementById('introduccion'),
    document.getElementById('objetivo'),
    document.getElementById('hipotesis'),
    document.getElementById('justificacion'),
    document.getElementById('desarrollo')
];

// Configuramos el Intersection Observer
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Agregamos la clase 'show' cuando entra al viewport
            }
        });
    },
    {
        threshold: 0.1 // Mínimo del 10% visible para activar la animación
    }
);

// Observamos cada sección
sections.forEach(section => {
    observer.observe(section);
});

// Detectar cuando la tarjeta debe aparecer
window.addEventListener('scroll', function() {
    const card = document.querySelector('.card'); // Seleccionamos la tarjeta
    const cardPosition = card.getBoundingClientRect().top; // Obtenemos la posición de la tarjeta en relación a la ventana
    const windowHeight = window.innerHeight; // Altura de la ventana del navegador

    // Si la tarjeta está dentro de la vista, mostramos la tarjeta
    if (cardPosition < windowHeight) {
        card.classList.add('show');
    } else {
        card.classList.remove('show'); // Si está fuera de la vista, la ocultamos
    }
});
