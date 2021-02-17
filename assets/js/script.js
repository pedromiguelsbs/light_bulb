const image = document.querySelector('[data-image]')
const button = document.querySelector('[data-button]')

const changeLamp = () => {
    const srcLamp = image.getAttribute('src').split('/')[3]
    if (srcLamp == 'lamp-off.png') {
        image.src = './assets/img/lamp-on.png'
    } else {
        image.src = './assets/img/lamp-off.png'
    }
}

button.addEventListener('click', changeLamp)