document.addEventListener('DOMContentLoaded', () => {
    // Escuchar el evento submit en cualquier formulario de operaciones que exista en la vista actual
    
    const transferForm = document.getElementById('transferForm');
    const mobilePaymentForm = document.getElementById('mobilePaymentForm');
    const depositForm = document.getElementById('depositForm');

    if (transferForm) {
        transferForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulación de procesamiento
            alert('¡Transferencia realizada con éxito!');
            transferForm.reset();
            window.location.href = 'dashboard.html';
        });
    }

    if (mobilePaymentForm) {
        mobilePaymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Pago móvil procesado con éxito!');
            mobilePaymentForm.reset();
            window.location.href = 'dashboard.html';
        });
    }

    if (depositForm) {
        depositForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Depósito acreditado a su cuenta con éxito!');
            depositForm.reset();
            window.location.href = 'dashboard.html';
        });
    }
});
