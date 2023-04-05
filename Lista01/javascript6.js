function verificar(){
    var KWH = parseFloat(document.getElementById("KWH").value);

    if(KWH <= 300){
        alert("Cálculo total da conta de energia:  R$ " + KWH * 1.25)
        
    }else if(KWH <= 500 ){
        alert("Cálculo total da conta de energia: R$ " + KWH * 1.50)

    }else if(KWH <= 600 ){
        alert("Cálculo total da conta de energia: R$ " + KWH * 1.75)

    }else if(KWH <= 800 ){
        alert("Cálculo total da conta de energia: R$ " + KWH * 2.0)
        
    }else if(KWH > 800 ){
        alert("Cálculo total da conta de energia: R$ " + KWH * 2.50)

    }

}