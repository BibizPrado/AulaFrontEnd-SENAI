function submit() {
    //obter os valores informados no campo de entrada
    var mulher = parseFloat(document.getElementById("mulher").value);
    var homem = parseFloat(document.getElementById("homem").value);
    var altura = parseFloat(document.getElementById("altura").value); 

    //verificar os números
   if(mulher = 62.1 * altura - 48.7) {
   alert('Seu peso ideal é: ' + mulher.toFixed(2) +  ' Kg')
   }
   else if(homem = 72.7 * altura - 62) {
   alert('Seu peso ideal é: ' + homem.toFixed(2) +  ' Kg')
   }
}