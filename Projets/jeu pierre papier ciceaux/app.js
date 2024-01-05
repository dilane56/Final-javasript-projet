const spanOrdinateur = document.getElementById('choix-ordinateur');
const spanUtilisateur =document.getElementById('choix-utilisateur');
const spanResultat = document.getElementById('resultat');

const pierre   = document.getElementById('pierre');
const papier   = document.getElementById('papier');
const ciseaux   = document.getElementById('ciseaux');

//
ciseaux.addEventListener('click',afficherCiseaux);

pierre.addEventListener('click',afficherPierre);
papier.addEventListener('click',afficherPapier);


let choixUtilisateur
let choixOrdinateur
let resultat
function afficherCiseaux(){
     
    spanUtilisateur.innerHTML = '<img src="ciseaux.png">';
    choixUtilisateur = 'ciseaux';
    generer_choix_ordinateur();
    verification();
   
}
function afficherPierre(){
    spanUtilisateur.innerHTML = '<img src="pierre.png">';
    choixUtilisateur = 'pierre';
    generer_choix_ordinateur();
    verification();  
   
}
function afficherPapier(){
    spanUtilisateur.innerHTML = '<img src="papier.png">';
    choixUtilisateur = 'papier';
    generer_choix_ordinateur();
    verification();
      
}

// 

    


function generer_choix_ordinateur(){
  let  random = Math.floor(Math.random() * 3 )+1 // generer un nombre compris entre 1 et 3
    if(random ===1){
        choixOrdinateur = "pierre"
    }
    if(random ===2){
        choixOrdinateur = "papier";
    }
    if(random ===3){
        choixOrdinateur = "ciseaux";
    }
    
    spanOrdinateur.innerHTML=`<img src="${choixOrdinateur}.png">`
}

function verification(){
    if(choixUtilisateur== choixOrdinateur){
        resultat ="egalité";
        spanResultat.innerText = resultat;
        spanResultat.style.display = "flex";
        spanResultat.style.color = "blue";
    }
    

    if(choixUtilisateur== "pierre" && choixOrdinateur=="papier"){
        resultat ="Perdu";
        spanResultat.innerText = resultat;
        spanResultat.style.display = "flex";
        spanResultat.style.color = "red";
    }
    
    if(choixUtilisateur== "pierre" && choixOrdinateur=="ciseaux"){
        resultat ="Gagné";
        spanResultat.innerText = resultat;
        spanResultat.style.display = "flex";
        spanResultat.style.color = "green";
    }
    if(choixUtilisateur== "papier" && choixOrdinateur=="ciseaux"){
        resultat ="Perdu";
        spanResultat.innerText = resultat;
        spanResultat.style.display = "flex";
        spanResultat.style.color = "red";
    }
    
    if(choixUtilisateur== "papier" && choixOrdinateur=="pierre"){
        resultat ="Gagné";
        spanResultat.innerText = resultat;
        spanResultat.style.display = "flex";
        spanResultat.style.color = "green";
    }
    
    if(choixUtilisateur== "ciseaux" && choixOrdinateur=="papier"){
        resultat ="Gagné";
        spanResultat.innerText = resultat;
        spanResultat.style.display = "flex";
        spanResultat.style.color = "green";
    }
    
    if(choixUtilisateur== "ciseaux" && choixOrdinateur=="pierre"){
        resultat ="Perdu";
        spanResultat.innerText = resultat; 
        spanResultat.style.display = "flex";
    }

}