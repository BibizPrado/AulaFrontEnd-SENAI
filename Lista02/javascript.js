function submit() {
    //obter os valores informados no campo de entrada
    var x = parseFloat(document.getElementById("x").value);
 
    //verificar os números
    let absx = Math.abs(x);
    console.log(absx);

    alert("Valor absoluto " + absx);
}