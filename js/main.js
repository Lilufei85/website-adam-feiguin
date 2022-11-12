const openModal = document.querySelector ('.foto-1');
/*constande modal es igual a la seleccion del elemento que quiero que abra la ventana modal cdo hago click*/
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close');

openModal.addEventListener('click', (e)=> {
    e.preventDefault();
    modal.classList.add('modal-show')
});
/**cuando se hace click en el elemento se ejecuta esa fx*/

closeModal.addEventListener('click', (e)=> {
    e.preventDefault();
    modal.classList.remove('modal-show')
});