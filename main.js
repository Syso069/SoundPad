function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('input[type=button]');
console.log(listaDeTeclas);

listaDeTeclas[0].onclick = tocaSomPom;