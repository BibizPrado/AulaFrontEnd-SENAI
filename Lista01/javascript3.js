function submit(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var aux = num1;

    if(num2 > num1){
     aux=num1;
     num1=num2;
     num1=aux;
    }

    if(num1 > num2){
     aux=num2;
     num2=num1;
     num1=aux;
    }

    alert(num1+"-"+num2);
   }