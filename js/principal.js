function createProd(){
    var prod = document.createElement("ul");

    var imge = document.createElement("li");
    var name = document.createElement("li");
    var descri = document.createElement("li");
    var price = document.createElement("li");
    var discountPrice = document.createElement("li");
    var parcel = document.createElement("li");
    var buttonBuy = document.createElement("li");

    imge.textContent = "img";
    name.textContent = "Nome do produto";
    descri.textContent = "Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.";
    price.textContent = "De: R$23,99";
    discountPrice.textContent = "Por: R$19,99";
    parcel.textContent = "ou 2x de R$9,99";
    buttonBuy.textContent = "Comprar";

    prod.appendChild(imge);
    prod.appendChild(name);
    prod.appendChild(descri);
    prod.appendChild(price);
    prod.appendChild(discountPrice);
    prod.appendChild(parcel);
    prod.appendChild(buttonBuy);

    return(prod);
}

var buttonMore = document.querySelector(".more-prod");
buttonMore.addEventListener("click", function(event) {
    event.preventDefault();

    var division = document.querySelector(".prod");
    
    var pos = document.createElement("div");

    for(i=0; i<4; i++){
        var product = createProd();
        pos.appendChild(product);
    }

    division.appendChild(pos);
});