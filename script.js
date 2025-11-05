const buttons = document.querySelectorAll("[data-button]");

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function() {
        const idLamp = button.getAttribute('data-button');
        const lamp = document.querySelector('[data-lamp="' + idLamp + '"]');
        button.innerHTML= "spegni";
        lamp.src= 'img (4)/img/yellow_lamp.png'
    });
}