const copyBtn  =document.getElementById('copy');
const generer = document.getElementById('generer');
function getPassword(){
   
    const chars = "0123456789abcdefghijklmnopqrtuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength =16;
    var password ="";
    //generer le mot de passe
    for(let i=0;i<passwordLength;i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1)

        //afficher le mot de passe

        document.getElementById('password').value=password;
        

        //changer le style du bouton copier
        copyBtn.style.backgroundColor="#6c757d";
        copyBtn.style.color = "#fff";
    }
    
}
generer.addEventListener('click',getPassword);
// copier le mot de passe
 function copyMdp(){
    
    const inputpassword = document.getElementById('password');
    //verifier la longueur du mot de passe 
    if(inputpassword.value.length==16){
        
        //copier le mot de passe
        inputpassword.select()
   
        inputpassword.setSelectionRange(0, 99999); // For mobile devices

     // Copy the text inside the text field
        navigator.clipboard.writeText(inputpassword.value);
        
        //changer le style du bouton copier
        copyBtn.style.background="transparent"
        copyBtn.style.color = "#000"
        // afficher un message 
        alert("Mot de passe copié avec succès");
    }else{
        //
        alert("veillez generer un mot de passe");
    }
    
 }
 copyBtn.addEventListener('click',copyMdp); 
 