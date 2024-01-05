const nombre1 = document.querySelector('.nb1');
const nombre2 = document.querySelector('.nb2');
const operateur = document.querySelector('.op');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const link = document.querySelector('.link');
const section = document.querySelector('section');
const resultat = document.getElementById('result')
var compteur = 0;

// Nombre aléatoire  Début du jeu
var  random1 =Math.random()*11 << 0;// pour generer des nombres entre entre 0 et 11
 var random2 =Math.random()*11 << 0; // pour generer des nombres entre 0 et 11

 // inserer les nombres au hazar dans les variable nb1 et nb2
 nombre1.innerHTML = random1;
 nombre2.innerHTML = random2;
 

 function verifier(){
    //recupérer le resultat entrer par le joueur
    var res = document.querySelector('.res').value; 

    if((random1 + random2) == res){
        
        message.style.backgroundColor = "green";
        message.innerHTML = "Correcte."

        // Creer d'autre nombre aléatoire
        random1 =Math.random()*11 << 0;
        random2 =Math.random()*11 << 0; 
        resultat.value =""
        nombre1.innerHTML = random1;
        nombre2.innerHTML = random2;
        compteur++;

    }else{
        
        message.style.backgroundColor = "red";
        message.innerHTML = "vous avez perdu."
        section.innerHTML = " ";
        score.innerHTML = `<span>${compteur}</span><br> Score`;
        link.style.display = "block";

    }

 }