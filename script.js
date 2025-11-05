const bottone = document.querySelector(".button")
const lampadina = document.querySelector(".bulbo")
let acceso = false
bottone.addEventListener("click", function(){
if(acceso=== false){
  bottone.innerHTML= "spegni";
  lampadina.src= 'img (4)/img/yellow_lamp.png'
acceso=true;
}
else{
bottone.innerHTML="accendi"
lampadina.src="img (4)/img/white_lamp.png"
acceso = false;

}


})
const bottoneSecond = document.querySelector(".button-2")
const lampadinaSecond = document.querySelector(".bulbo-2")
let accesoSecond = false
bottoneSecond.addEventListener("click", function(){
if(acceso=== false){
  bottoneSecond.innerHTML= "spegni";
  lampadinaSecond.src= 'img (4)/img/yellow_lamp.png'
accesoSecond=true;
}
else{
bottoneSecond.innerHTML="accendi"
lampadinaSecond.src="img (4)/img/white_lamp.png"
accesoSecond = false;

}


})