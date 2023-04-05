function submit() {
    //obter os valores informados no campo de entrada
    var x = parseFloat(document.getElementById("x").value);
 
    //verificar os números
    let floorx = Math.floor(x);
    console.log(floorx);

    alert("O Arredondamento é: " + floorx.toFixed(2));
}