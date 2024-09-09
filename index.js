 function obtenerValores() {
            var numero1 = parseFloat(document.getElementById('num1').value);
            var numero2 = parseFloat(document.getElementById('num2').value);
            return { numero1, numero2 };
        }

        function mostrarResultado(resultado) {
            document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
        }

        function sumar() {
            var { numero1, numero2 } = obtenerValores();
            var resultado = numero1 + numero2;
            mostrarResultado(resultado);
        }

        function restar() {
            var { numero1, numero2 } = obtenerValores();
            var resultado = numero1 - numero2;
            mostrarResultado(resultado);
        }

        function multiplicar() {
            var { numero1, numero2 } = obtenerValores();
            var resultado = numero1 * numero2;
            mostrarResultado(resultado);
        }

        function dividir() {
            var { numero1, numero2 } = obtenerValores();
            if (numero2 == 0) {
              alert('Error: División por 0');
            } else {
                var resultado = numero1 / numero2;
                mostrarResultado(resultado);
            }
        }
