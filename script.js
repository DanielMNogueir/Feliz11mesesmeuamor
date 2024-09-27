let slideIndex = 0;

function iniciarCarrossel() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("carrossel").style.display = "block";
    mostrarSlide(slideIndex);
}

function mostrarSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        // Final do carrossel, mostrar mensagem de amor
        document.getElementById("carrossel").style.display = "none";
        document.getElementById("final").style.display = "block";
        return;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function mudarSlide(n) {
    mostrarSlide(slideIndex + n);
}
