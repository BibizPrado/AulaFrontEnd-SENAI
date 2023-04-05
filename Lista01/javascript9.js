function submit() {
    //obter os valores informados no campo de entrada
    var promo = parseFloat(document.getElementById("promo").value);

    //verificar os números
   if(promo == 1){
    alert("O total do seu pedido é: R$15,00");
   }else if(promo ==  2){
    alert("O total do seu pedido é: R$10,00");
   }else if(promo == 3){
    alert("O total do seu pedido é: R$5,50");
   }else{
    alert("Pedido não disponível!");
   }
}