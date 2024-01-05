let error=document.querySelector('.error_message');
let longLink = document.querySelector('.long_link');
const short = document.querySelector('.result');
function shortlinkFunct(){
    
    //verification de input
    if(!longLink.value == ""){
       //vider l'erreur
        error.innerHTML="";
        short.innerHTML="";
        //connection API
        let url = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longLink.value)} `;
        fetch(url)
        // on recupere la reponse que l'on transforme en fichier text
        .then(response => response.text())
        //Dans notre reponse on recupère l'objet result
        //Ensuite dans l objet result on recupère la valeur de la clé  short_link
        //et enfin on l'insere dans notre <div class='result'>
        .then(data =>short.innerHTML = data );
        //On modifie le Css de notre div qui etait a display:hide que  
        short.style.display = "block";
       
        
        if(short.innerHTML.length == 0){
            short.innerHTML="Lien non valide !";
               
        }
    }else{
        //error
        error.innerHTML = "veillez remplir le champ !";
        short.style.display ="none";
    }
}