// Primeira parte Habilitado e Desabilitado
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var links = document.querySelector('.links');
    // troca o estado da classe .toggle para ativo
    menuToggle.classList.toggle('active')
    // troca o estadp da classe links ativo
    links.classList.toggle('active')
}

// troca o copo grande 
function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

// troca a cor do círculo do fundo
function changeCircleColor(color){
    const circulo =document.querySelector('.circulo');
    circulo.style.background = color;
}