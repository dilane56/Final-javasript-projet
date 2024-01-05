//les differentes variables dont on a besoin
var span ,btn_str, btn_stop ,temps, milisecondes, secondes, minutes, heures;

// function pour initialiser les variables lors du chargement de la page
window.onload=function(){
    span =document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    temps;
    milisecondes = 0;
    secondes = 0;
    minutes=0;
    heures = 0;
}
// mettre en place le compteur

function update_chrono(){
   milisecondes+=1;
   if(milisecondes ==10){
    milisecondes =1;
    secondes+=1;
    if(secondes ==60){
        minutes+=1;
        secondes=0;
        if(minutes==60){
            heures+=1;
            
            if(heures == 23 ){
                heures =0;
                
            }
            minutes=1;
        }
    }
   } 
   // insertion des valeurs dans les spans
   span[0].innerHTML = heures + "h";
   span[1].innerHTML = minutes + "min";
   span[2].innerHTML = secondes + "s";
   span[3].innerHTML = milisecondes + "ms";
   


}
//mettre en place la fonction du bouton start
function start(){
    // cette logne esecute la fonction update_chrono() toute les 100ms
    temps = setInterval(update_chrono,100);
    btn_start.disabled = true;
}
// stopper le chronometre 
function stop(){
    clearInterval(temps);//suppresiond de l'intervale que nous avons creer 
    btn_start.disabled = false;
}

// Initialiser les valeur du compteur 
function reset (){
    clearInterval(temps);
    btn_start.disabled = false;
    milisecondes = 0,secondes=0,minutes=0,heures=0;
// on insere les nouvelles valeurs dans les spans
    span[0].innerHTML = heures + "h";
    span[1].innerHTML = minutes + "min";
    span[2].innerHTML = secondes + "s";
    span[3].innerHTML = milisecondes + "ms";
}