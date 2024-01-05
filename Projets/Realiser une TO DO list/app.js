var addtoDobutton = document.getElementById('addToDo');
var toContainer = document.getElementById('toDoContainer');
var inputField= document.getElementById('inputField');
addtoDobutton.onclick = function(){

}
function addtodo(){
    
    //verifier si l'input nest pas vide
    if(inputField.value !=""){
        // si l'input n'est pas vide, creer le paragraphe
        var paragraphe =document.createElement('p');
         //valoriser ce paragraphe avec le contenu de l'element toDoContainer
    paragraphe.innerHTML = inputField.value;

    //inserer le paragraphe dans l'element toDocontainer
    toContainer.appendChild(paragraphe);

    // Modifier le style du paragraphe
    paragraphe.classList.add('paragraphe_style')



    //vider l'input quand le paragraphe est ajouté
    inputField.value = "";
    paragraphe.addEventListener('click',function(){
        paragraphe.classList.add('paragraphe_click')
    });
    //supprimer la tache quand on double clique sur la tache
    paragraphe.addEventListener('dblclick',function(){
        toContainer.removeChild(paragraphe);
    })
    }else{
        alert("veillez ajouter une tache");
    }
   
}
addtoDobutton.addEventListener('click',addtodo);