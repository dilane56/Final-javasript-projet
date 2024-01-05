
const page = document.getElementsByClassName('page');
const taille = page.length;

const pageAcceuil = document.getElementById('container');
const button = document.getElementsByClassName('nav-link');
const taille1 = button.length;
var buttons = document.querySelectorAll('button');
const sidebarButton = document.getElementById('sidebar');
const chrono = document.getElementById('chrono');


 const sidebar = document.querySelector('nav');
 const main =document.querySelector('main');
 const nav = document.querySelector('.side');
 
/*function opensidebar(event){
 
   if(window.screen.width <= 570 ){
    
    
    sidebar.style.animation= "deroule 0.4s  ease";
 
   sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
   sidebarButton.className = "active";
   }
  
  if(sidebarButton.classList.contains('active')&& sidebar.style.display == "none"){
    sidebarButton.classList.remove('active');
    
  }
  /*if(sidebar.style.display =="block"){
    alert('hello');
    sidebar.style.animation == "enroule .04s ease";
    sidebar.style.display == "none";
  }*/
  
 /*   
}
sidebarButton.addEventListener('click',opensidebar);*/
/*function toggleSidebar() {
    const nav = document.querySelector('.side');  
    nav.classList.toggle('active');
}


sidebarButton.addEventListener('click',toggleSidebar);*/





function openOnglet(evt,name){
    var i;
    for(i=0; i<taille; i++){
        if(page[i].style.display ==='block'){
            page[i].style.display = 'none';
        }
       
    }
    pageAcceuil.style.display = "none";
    var navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(navLink) {
    navLink.classList.remove('active');
});
    
    const affiche =  document.getElementById(name);
    affiche.style.display = "block";
   
    
    evt.currentTarget.className +=" active";
    if(window.screen.width <= 570){
    
        nav.classList.remove('active');
    }
}



document.addEventListener("DOMContentLoaded", function() {
  //  var sidebar = document.getElementById("sidebar");
    //var sidebarToggle = document.getElementById("sidebar-toggle");
  
    // Événement pour afficher/masquer la sidebar lorsque le bouton est cliqué
    sidebarButton.addEventListener("click", function(event) {
        event.stopPropagation();
        sidebar.classList.toggle("active");
     
    });
  
    // Événement pour masquer la sidebar lorsque l'utilisateur clique en dehors de celle-ci
    document.addEventListener("click", function(event) {
      var targetElement = event.target; // Élément sur lequel l'utilisateur a cliqué
  
      // Vérifie si l'élément sur lequel l'utilisateur a cliqué n'est pas la sidebar ni le bouton
      if (targetElement !== nav && targetElement !== sidebarButton){
        nav.classList.remove("active"); // Masquer la sidebar
      }
      
      
    });
  });


 
