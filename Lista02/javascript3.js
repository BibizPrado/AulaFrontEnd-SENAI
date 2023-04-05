function submit() {
    //obter os valores informados no campo de entrada
    var x = parseFloat(document.getElementById("x").value);
 
    //verificar os números
    let sinx = Math.sin(x);
    console.log(sinx);

    alert("O Seno é: " + sinx.toFixed(2));
}