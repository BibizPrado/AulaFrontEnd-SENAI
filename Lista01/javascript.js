function verificar() {
    //obter os valores informados no campo de entrada
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    //verificar os números
   if(num1 + num2 + num3 < 50)
   alert('Menos de 50!');
   else
   alert('Número maior de 50!');
}