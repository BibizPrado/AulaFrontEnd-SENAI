function verificar(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    
    if(num2 > num1){
        alert(num2 + " é maior que " + num1 + " | A diferença entre eles é de: " + (num2 - num1) + " números");
    }
    else{
        alert(num1 + " é maior que " + num2 + " | A diferença entre eles é de: " + (num2 - num1) + " números"); 
    }

}