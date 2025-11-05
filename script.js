const buttons = document.querySelectorAll("[data-button]");
acceso=false;
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function() {
        const idLamp = button.getAttribute('data-button');
        const lamp = document.querySelector('[data-lamp="' + idLamp + '"]');
        if(acceso===false){
        button.innerHTML= "spegni";
        lamp.src= 'img (4)/img/yellow_lamp.png'
      acceso=true; 
      }
      else{
        button.innerHTML="accendi"
        lamp.src='img (4)/img/white_lamp.png'
        acceso=false
      }
    });
}