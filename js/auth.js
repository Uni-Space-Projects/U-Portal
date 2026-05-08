document.addEventListener('DOMContentLoaded', () => {
    // Views
    const loginView = document.getElementById('loginView');
    const registerView = document.getElementById('registerView');
    const securityView = document.getElementById('securityView');

    // Toggles
    const showRegisterBtn = document.getElementById('showRegister');
    const showLoginBtn = document.getElementById('showLogin');

    // Forms
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const securityForm = document.getElementById('securityForm');

    // Registration Inputs
    const regPass = document.getElementById('regPass');
    const regPassConfirm = document.getElementById('regPassConfirm');
    const passError = document.getElementById('passError');
    const confirmError = document.getElementById('confirmError');

    // Login Elements
    const btnLogin = document.getElementById('btnLogin');
    const loginText = document.getElementById('loginText');
    const loginSpinner = document.getElementById('loginSpinner');
    const loginError = document.getElementById('loginError');

    // Navigation logic
    showRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginView.classList.add('hidden');
        registerView.classList.remove('hidden');
    });

    showLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        registerView.classList.add('hidden');
        loginView.classList.remove('hidden');
    });

    // Validations during typing
    regPass.addEventListener('input', () => {
        const isValid = /^\d{6,}$/.test(regPass.value);
        if (!isValid && regPass.value.length > 0) {
            regPass.classList.add('input-error');
            passError.classList.add('visible');
        } else {
            regPass.classList.remove('input-error');
            passError.classList.remove('visible');
        }
        checkConfirmPass();
    });

    regPassConfirm.addEventListener('input', checkConfirmPass);

    function checkConfirmPass() {
        if (regPassConfirm.value.length > 0 && regPass.value !== regPassConfirm.value) {
            regPassConfirm.classList.add('input-error');
            confirmError.classList.add('visible');
            return false;
        } else {
            regPassConfirm.classList.remove('input-error');
            confirmError.classList.remove('visible');
            return true;
        }
    }

    // Register Form Submit
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const isValidPass = /^\d{6,}$/.test(regPass.value);
        const isValidConfirm = checkConfirmPass();

        if (isValidPass && isValidConfirm) {
            // Ir a preguntas de seguridad
            registerView.classList.add('hidden');
            securityView.classList.remove('hidden');
        }
    });

    // Security Form Submit
    securityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simular que se completó el registro
        alert('Registro completado con éxito. Ahora puedes iniciar sesión.');
        securityView.classList.add('hidden');
        loginView.classList.remove('hidden');
        loginForm.reset();
        registerForm.reset();
        securityForm.reset();
    });

    // Login Form Submit
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        loginError.classList.remove('visible');
        
        // Mostrar spinner
        loginText.style.display = 'none';
        loginSpinner.style.display = 'block';
        btnLogin.disabled = true;

        // Simular validación con spinner de 2 segundos exactos
        setTimeout(() => {
            // Ocultar spinner
            loginText.style.display = 'block';
            loginSpinner.style.display = 'none';
            btnLogin.disabled = false;

            // Simular login exitoso e ir al dashboard
            // (En este caso no validamos credenciales reales por los requisitos, 
            // simplemente dejamos pasar tras los 2 segundos para la demo académica)
            window.location.href = 'dashboard.html';
            
        }, 2000);
    });
});