document.addEventListener('DOMContentLoaded', () => {
    // Confirmación al hacer clic en realizar pedido
    const orderButtons = document.querySelectorAll('.btn-order');
    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('¡Producto añadido a tu lista de pedido!');
        });
    });

    // Envío del formulario de suscripción
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por suscribirte!');
            newsletterForm.reset();
        });
    }
});