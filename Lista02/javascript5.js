    //obter os valores informados no campo de entrada
    var x = parseFloat(document.getElementById("x").value);
    var y = parseFloat(document.getElementById("y").value);


    //verificar os números
    if(x){
        console.log(Math.max(x));

        alert("O maior valor é: " + maxx.toFixed(2));
    }else{
        console.log(Math.max(y));

        alert("O maior valor é: " + maxy.toFixed(2));    
    }