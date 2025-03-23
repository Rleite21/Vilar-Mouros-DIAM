document.addEventListener("DOMContentLoaded", function () {
    const festivalImage = document.getElementById("festival-photo");

    if (festivalImage) {
        festivalImage.addEventListener("mouseover", function () {
            this.style.visibility = "hidden";
        });

        festivalImage.addEventListener("mouseout", function () {
            this.style.visibility = "visible";
        });
    }
});

//// 2 

function validarComentario() {
    const comentarioInput = document.getElementById("comentario");
    const status = document.getElementById("comentario-status");

    const palavrasProibidas = ["burro", "parvo", "paspalho", "estúpido", "patego", "porco", "idiotice"];

    let comentarioTexto = comentarioInput.value.toLowerCase();

    let comentarioValido = !palavrasProibidas.some(palavra => comentarioTexto.includes(palavra));

    if (comentarioValido) {
        status.textContent = "Comentário aceite";
        status.style.color = "green";
    } else {
        comentarioInput.value = "";
        status.textContent = "Comentário rejeitado! Uso de linguagem inapropriada.";
        status.style.color = "red";
    }
}

///// 3

let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);

