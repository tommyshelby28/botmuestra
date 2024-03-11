document.addEventListener("DOMContentLoaded", function() {
    const userInput = document.getElementById('userNameInput');
    const userNameDisplay = document.getElementById('userName');

    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            generateUsername(); 
            copyMessageToClipboard();
        }
    });

    document.getElementById('generateButton').addEventListener('click', function() {
        generateUsername();
        copyMessageToClipboard();
    });

    function generateUsername() {
        const inputName = userInput.value.trim();
        const finalUsername = 'Z' + inputName + generateRandomNumbers();
        userNameDisplay.textContent = finalUsername;
    }

    function copyMessageToClipboard() {
        const message = "Paso a dejarte información! ❤️\n\n" +
                        "Carga mínima 1000\n" +
                        "Retiro mínimo 2000\n" +
                        "Horario de pagos\n\n" +
                        "Nombre de usuario: " + userNameDisplay.textContent + "\n" +
                        "Tu contraseña es: **\n\n" +
                        "Link para ingresar a jugar: Somos (casino y link)\n\n" +
                        "Si querés realizarla consultanos cbu";

        navigator.clipboard.writeText(message)
            .then(() => {
            })
            .catch(err => {
                console.error('Error al copiar al portapapeles:', err);
                alert("Hubo un error al copiar el mensaje al portapapeles. Por favor, inténtalo de nuevo.");
            });
    }

    function generateRandomNumbers() {
        let randomNumbers = '';
        for (let i = 0; i < 3; i++) {
            randomNumbers += Math.floor(Math.random() * 10); 
        }
        return randomNumbers;
    }
    document.getElementById('generatePassword').addEventListener('click', function() {
        const password = 'casino123';
        copyToClipboard(password);
    });
    
    function copyToClipboard(text) {
        const el = document.createElement('textarea');
        el.value = text;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
});

window.onload = function() {
    const mensajeGuardado = localStorage.getItem('mensaje');
    if (mensajeGuardado) {
      document.getElementById('mensaje').value = mensajeGuardado;
    }
  };