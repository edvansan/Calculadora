
        var n1 = document.querySelector('#n1')
        var n2 = document.querySelector('#n2')
        var resultado = document.querySelector('span')

        function somar() {
            resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
        }
        function Subtrair() {
            resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
        }
        function Mutiplicar() {
            resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
        }
        function Dividir() {
            resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
        }
        