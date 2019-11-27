function createProd(){
    var prod = document.createElement("ul");

    var imge = document.createElement("li");
    imge.classList.add("img");

    var name = document.createElement("li");
    name.classList.add("name-prod");

    var descri = document.createElement("li");
    descri.classList.add("descri");

    var price = document.createElement("li");
    price.classList.add("price");

    var discountPrice = document.createElement("li");
    discountPrice.classList.add("discount-price");

    var parcel = document.createElement("li");
    parcel.classList.add("parcel");

    var buttonBuy = document.createElement("li");
    buttonBuy.classList.add("button");

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

function changeClass(cla, before, after) {
    cla.classList.remove(before);
    cla.classList.add(after);
}

var buttonMore = document.querySelector(".more-prod");
buttonMore.addEventListener("click", function(event) {
    event.preventDefault();

    var division = document.querySelector(".prod");
    changeClass(division, "prod", "prod-change");

    var pos = document.createElement("div");
    pos.classList.add("pos-create");

    for(i=0; i<4; i++){
        var product = createProd();
        product.classList.add("prod-create"+String(i));
        pos.appendChild(product);
    }

    division.appendChild(pos);
});