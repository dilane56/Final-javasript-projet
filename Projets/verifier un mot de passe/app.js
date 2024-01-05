const myInput = document.getElementById('psw');
const letter = document.getElementById('letter');
const capital = document.getElementById('capital');
const number = document.getElementById('number');
const length = document.getElementById('length');

// Lorsque l'utilisateur clique sur le champ du  mot de passe on affiche la boite message
myInput.onfocus = function(){
    document.getElementById("message").style.display = "flex"
    
}

// Lorsque l'utilisateur commence a taper quelque chose dans le champ mot de passe
myInput.onkeyup = function(){
    // valider les lettre minuscules
    var lowerCaseLetters = /[a-z]/g
    if(myInput.value.match(lowerCaseLetters)){
        // si le  mot de passe contient une lettre minuscule, enlever la classe
        // invalid et ajouter la classe valid
        letter.classList.remove('invalid');
        letter.classList.add('valid');

    }else{
        letter.classList.remove('valid');
        letter.classList.add('invalid');
    }
// Valider les lettre majuscules
    var uperCaseLetters = /[A-Z]/g
    if(myInput.value.match(uperCaseLetters)){
        // si le  mot de passe contient une lettre Majuscule, enlever la classe
        // invalid et ajouter la classe valid
        capital.classList.remove('invalid');
        capital.classList.add('valid');

    }else{
        capital.classList.remove('valid');
        capital.classList.add('invalid');
    }
// Valider les nombres
    var numbers = /[0-9]/g
    if(myInput.value.match(numbers)){
        // si le  mot de passe contient un nombre, enlever la classe
        // invalid et ajouter la classe valid
        number.classList.remove('invalid');
        number.classList.add('valid');

    }else{
        number.classList.remove('valid');
        number.classList.add('invalid');
    }
// on verifie la longeur

    
    if(myInput.value.length >= 8){
      
        length.classList.remove('invalid');
        length.classList.add('valid');

    }else{
        length.classList.remove('valid');
        length.classList.add('invalid');
    }

}