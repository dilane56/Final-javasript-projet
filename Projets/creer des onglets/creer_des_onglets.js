function openOnglet(evt,name){
    var i,tabcontent,tablinks;
    
    tabcontent = document.getElementsByClassName('tabcontent');
   const taille = tabcontent.length
    for(i=0; i<taille; i++){
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
     const taile1 = tablinks.length
    for(i=0;i<taile1;i++){
        tablinks[i].className=tablinks[i].className.replace("active","");

    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className +=" active";
}