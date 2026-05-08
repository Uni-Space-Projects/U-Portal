document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');
    const passwordForm = document.getElementById('passwordForm');
    const newPass = document.getElementById('newPass');
    const newPassConfirm = document.getElementById('newPassConfirm');

    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Tus datos han sido actualizados exitosamente.');
    });

    passwordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isValidPass = /^\d{6,}$/.test(newPass.value);
        if (!isValidPass) {
            alert('Error: La nueva contraseña debe tener al menos 6 caracteres numéricos.');
            return;
        }

        if (newPass.value !== newPassConfirm.value) {
            alert('Error: Las contraseñas no coinciden.');
            return;
        }

        alert('Tu contraseña ha sido cambiada de forma segura.');
        passwordForm.reset();
    });
});
