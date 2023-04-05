function verificar(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    if(num1 > num2){
        if(num1 > num3)
            maior = num1;
        else
            maior = num3
    }
    else{
        if(num2 > num3)
            maior = num2;
        else
            maior = num3; 
    }
    alert("A maior nota dentre os três é: " + maior)
}