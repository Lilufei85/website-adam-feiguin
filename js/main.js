
if(document.getElementById("buttonModal")) {
    var modal = document.getElementById ("myModal");
    var button = document.getElementById ("buttonModal");
    var span = document.getElementsByClassName ("close")[0];
    var body = document.getElementsByTagName ("body");

    button.onclick = function () {
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function () {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

}

/**
const openModal = document.querySelector ('.foto-1');
/*constande modal es igual a la seleccion del elemento que quiero que abra la ventana modal cdo hago click
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close');

openModal.addEventListener('click', (e)=> {
    e.preventDefault();
    modal.classList.add('modal-show')
    
});
/**cuando se hace click en el elemento se ejecuta esa fx

closeModal.addEventListener('click', (e)=> {
    e.preventDefault();
    modal.classList.remove('modal-show')
});*/