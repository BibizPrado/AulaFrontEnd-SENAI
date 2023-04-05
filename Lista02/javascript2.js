function submit() {
    //obter os valores informados no campo de entrada
    var x = parseFloat(document.getElementById("x").value);
 
    //verificar os números
    let sqrtx = Math.sqrt(x);
    console.log(sqrtx);

    alert("A raiz quadrada é: " + sqrtx.toFixed(2));
}