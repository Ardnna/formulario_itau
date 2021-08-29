        function enviar() {
            var nome = document.getElementById("nome");
        
            if (nome.value != "") {
                alert('Obrigado sr(a) ' + nome.value + '! Seu cadastro foi realizado com sucesso.');
                window.location.replace='https://sleepy-fermat-45ba7d.netlify.app';
            }
            return: false;
        }
