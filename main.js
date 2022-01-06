const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

console.log(hamburguer);
console.log(menu);

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('spread');
})


window.addEventListener('click', e => {
    if((menu.classList.contains('spread')) && 
        (e.target != hamburguer) &&
        (e.target != menu)) 
    {
        menu.classList.toggle('spread');
    }
});

const imgs = document.querySelectorAll('.img-galeria');
console.log(imgs);

const imgLight = document.querySelector('.add-img');
const containerLight = document.querySelector('.imagen-light');

imgs.forEach(element => {
    element.addEventListener('click', () =>{
        const srcImg = element.getAttribute('src');
        imgLight.src = srcImg;
        console.log(imgLight.src);

        containerLight.classList.toggle('show');
        imgLight.classList.toggle('showimage');
        hamburguer.style.opacity = '0';
    });
    //srgImg guarda el valor del atributo 'src' del elemento que en ese momento 
    //se haga click, luego pasamos ese valor al atributo del img de imgLight.
});

containerLight.addEventListener('click', (e) => {
console.log(e.target);
    //para cerrar el lightBox
if(e.target != imgLight) {
    containerLight.classList.toggle('show');
    imgLight.classList.toggle('showimage');
    hamburguer.style.opacity = '1';
}
})